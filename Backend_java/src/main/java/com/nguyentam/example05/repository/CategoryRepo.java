package com.nguyentam.example05.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nguyentam.example05.entity.Category;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Long> {
  Category findByCategoryName(String categoryName);
}