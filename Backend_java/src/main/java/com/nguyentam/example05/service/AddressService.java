package com.nguyentam.example05.service;

import java.util.List;

import com.nguyentam.example05.entity.Address;
import com.nguyentam.example05.payloads.AddressDTO;
import com.nguyentam.example05.payloads.AddressResponse;
import com.nguyentam.example05.payloads.CategoryResponse;

public interface AddressService {
  AddressDTO createAddress(AddressDTO addressDTO);

  AddressResponse getAddresses(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);

  AddressDTO getAddress(Long addressId);

  AddressDTO updateAddress(Long addressId, Address address);

  String deleteAddress(Long addressId);
}