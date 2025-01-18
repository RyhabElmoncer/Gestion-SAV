package com.sav.gestion_sav.Mapper;

import com.sav.gestion_sav.DTO.TechnicienDTO;
import com.sav.gestion_sav.Model.Technicien;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TechnicienMapper {
    TechnicienDTO toDTO(Technicien technicien);
    Technicien toEntity(TechnicienDTO technicienDTO);
}
