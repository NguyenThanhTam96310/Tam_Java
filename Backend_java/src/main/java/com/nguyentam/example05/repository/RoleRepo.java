package com.nguyentam.example05.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nguyentam.example05.entity.Role;
import com.nguyentam.example05.payloads.UserDTO;

@Repository
public interface RoleRepo extends JpaRepository<Role, Long> {

}