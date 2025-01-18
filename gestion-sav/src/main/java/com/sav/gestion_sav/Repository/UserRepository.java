package com.sav.gestion_sav.Repository;

import com.sav.gestion_sav.Enum.Role;
import com.sav.gestion_sav.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findByUsername(String username);
    boolean existsByEmail(String email);
    List<User> findByRole(Role role);
    Optional<User> findByEmail(String email);

}
