package com.sav.gestion_sav.Mapper;

import com.sav.gestion_sav.DTO.ReclamationDTO;
import com.sav.gestion_sav.Model.Reclamation;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReclamationMapper {
    ReclamationDTO toDTO(Reclamation reclamation);
    Reclamation toEntity(ReclamationDTO reclamationDTO);
}
