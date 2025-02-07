package com.marat.ecommerce.dao;

import com.marat.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Product, Long> {
    //findByCategoryId Spring magic auto query
    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable);
}
