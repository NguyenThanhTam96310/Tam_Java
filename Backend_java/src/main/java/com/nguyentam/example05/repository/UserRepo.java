package com.nguyentam.example05.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nguyentam.example05.entity.Role;
import com.nguyentam.example05.entity.User;
import com.nguyentam.example05.payloads.UserDTO;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
  @Query("SELECT u FROM User u JOIN FETCH u.addresses a WHERE a.addressId = ?1")
  List<User> findByAddress(Long addressId);

  Optional<User> findByEmail(String email);
}