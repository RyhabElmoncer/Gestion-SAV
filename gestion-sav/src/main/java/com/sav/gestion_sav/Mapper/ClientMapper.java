package com.sav.gestion_sav.Mapper;

import com.sav.gestion_sav.DTO.ClientDTO;
import com.sav.gestion_sav.Model.Client;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ClientMapper {
    ClientDTO toDTO(Client client);
    Client toEntity(ClientDTO clientDTO);
}
