package com.doug.fullstack.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RestController;

import com.doug.fullstack.DTO.SaleDTO;
import com.doug.fullstack.entities.Sale;
import com.doug.fullstack.repositories.SaleRepository;

@RestController
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	public Page<SaleDTO> findAll(Pageable pageable){
		Page<Sale> result =  repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
	
	
	

}
