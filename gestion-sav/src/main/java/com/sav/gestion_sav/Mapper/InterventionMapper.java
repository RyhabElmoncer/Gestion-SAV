package com.sav.gestion_sav.Mapper;

import com.sav.gestion_sav.DTO.InterventionDTO;
import com.sav.gestion_sav.Model.Intervention;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface InterventionMapper {
    InterventionDTO toDTO(Intervention intervention);
    Intervention toEntity(InterventionDTO interventionDTO);
}
