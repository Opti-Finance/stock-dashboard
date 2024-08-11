package com.FinancialAuthForm.FinancialAuthForm.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.web.servlet.config.annotation.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import static com.FinancialAuthForm.FinancialAuthForm.User.Permission.ADMIN_CREATE;
import static com.FinancialAuthForm.FinancialAuthForm.User.Permission.ADMIN_DELETE;
import static com.FinancialAuthForm.FinancialAuthForm.User.Permission.ADMIN_READ;
import static com.FinancialAuthForm.FinancialAuthForm.User.Permission.ADMIN_UPDATE;
import static com.FinancialAuthForm.FinancialAuthForm.User.Permission.MANAGER_CREATE;
import static com.FinancialAuthForm.FinancialAuthForm.User.Permission.MANAGER_DELETE;
import static com.FinancialAuthForm.FinancialAuthForm.User.Permission.MANAGER_READ;
import static com.FinancialAuthForm.FinancialAuthForm.User.Permission.MANAGER_UPDATE;
import static com.FinancialAuthForm.FinancialAuthForm.User.Role.ADMIN;
import static com.FinancialAuthForm.FinancialAuthForm.User.Role.MANAGER;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(cors -> cors.configurationSource(request -> {
                    CorsConfiguration configuration = new CorsConfiguration();
                    configuration.applyPermitDefaultValues();
                    configuration.setAllowedOrigins(List.of("http://localhost:3000")); // Add your allowed origins here
                    configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Add your allowed methods here
                    configuration.setAllowedHeaders(List.of("Authorization", "Content-Type")); // Add your allowed headers here
                    return configuration;
                }))
                .authorizeHttpRequests(req ->
                        req.requestMatchers("/api/v1/auth/register", "/api/v1/auth/authenticate", "/api/v1/auth/demo-controller")
                                .permitAll()
                                .requestMatchers("/api/v1/management/**").hasAnyRole(ADMIN.name(), MANAGER.name())
                                .requestMatchers(GET, "/api/v1/management/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
                                .requestMatchers(POST, "/api/v1/management/**").hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
                                .requestMatchers(PUT, "/api/v1/management/**").hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
                                .requestMatchers(DELETE, "/api/v1/management/**").hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name())
                                .anyRequest()
                                .authenticated()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout(logout ->
                        logout.logoutUrl("/api/v1/auth/logout")
                                .addLogoutHandler(logoutHandler)
                                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
                )
        ;

        return http.build();
    }

    @Bean
    public WebMvcConfigurer webMvcConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:3000") // Add your allowed origins here
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Add your allowed methods here
                        .allowedHeaders("Authorization", "Content-Type"); // Add your allowed headers here
            }
        };
    }
}
