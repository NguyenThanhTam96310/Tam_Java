package com.nguyentam.example05.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nguyentam.example05.config.AppConstants;
import com.nguyentam.example05.entity.Address;
import com.nguyentam.example05.payloads.AddressDTO;
import com.nguyentam.example05.payloads.AddressResponse;
import com.nguyentam.example05.payloads.CategoryResponse;
import com.nguyentam.example05.service.AddressService;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@SecurityRequirement(name = "E-Commerce Application")
public class AddressController {
  @Autowired
  private AddressService addressService;

  @PostMapping("/admin/address")
  public ResponseEntity<AddressDTO>

      createAddress(@Valid @RequestBody AddressDTO addressDTO) {
    AddressDTO savedAddressDTO = addressService.createAddress(addressDTO);
    return new ResponseEntity<AddressDTO>(savedAddressDTO, HttpStatus.CREATED);
  }

  // @GetMapping("/addresses")
  // public ResponseEntity<List<AddressDTO>> getAddresses() {
  // List<AddressDTO> addressDTOS = addressService.getAddresses();
  // return new ResponseEntity<List<AddressDTO>>(addressDTOS, HttpStatus.OK);
  // }
  @GetMapping("/admin/addresses")
  public ResponseEntity<AddressResponse> getAddresses(
      @RequestParam(name = "pageNumber", defaultValue = AppConstants.PAGE_NUMBER, required = false) Integer pageNumber,
      @RequestParam(name = "pageSize", defaultValue = AppConstants.PAGE_SIZE, required = false) Integer pageSize,
      @RequestParam(name = "sortBy", defaultValue = AppConstants.SORT_ADDRESS_BY, required = false) String sortBy,
      @RequestParam(name = "sortOrder", defaultValue = AppConstants.SORT_DIR, required = false) String sortOrder) {
    AddressResponse addressResponse = addressService.getAddresses(
        pageNumber == 0 ? pageNumber : pageNumber - 1,
        pageSize, "id".equals(
            sortBy) ? "addressId" : sortBy,
        sortOrder);
    return new ResponseEntity<AddressResponse>(addressResponse, HttpStatus.OK);
  }

  @GetMapping("/public/addresses/{addressId}")
  public ResponseEntity<AddressDTO>

      getAddress(@PathVariable Long addressId) {
    AddressDTO addressDTO = addressService.getAddress(addressId);
    return new ResponseEntity<AddressDTO>(addressDTO, HttpStatus.OK);
  }

  @PutMapping("/admin/addresses/{addressId}")
  public ResponseEntity<AddressDTO>

      updateAddress(@PathVariable Long addressId, @RequestBody Address address) {
    AddressDTO addressDTO = addressService.updateAddress(addressId, address);
    return new ResponseEntity<AddressDTO>(addressDTO, HttpStatus.OK);
  }

  @DeleteMapping("/admin/addresses/{addressId}")
  public ResponseEntity<String> deleteAddress(@PathVariable Long addressId) {
    String status = addressService.deleteAddress(addressId);
    return new ResponseEntity<String>(status, HttpStatus.OK);
  }
}