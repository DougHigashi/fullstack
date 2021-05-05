package com.doug.fullstack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.doug.fullstack.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
