package com.doug.fullstack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.doug.fullstack.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
