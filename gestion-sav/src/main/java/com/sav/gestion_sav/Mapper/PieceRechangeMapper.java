package com.sav.gestion_sav.Mapper;

import com.sav.gestion_sav.DTO.PieceRechangeDTO;
import com.sav.gestion_sav.Model.PieceRechange;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PieceRechangeMapper {
    PieceRechangeDTO toDTO(PieceRechange pieceRechange);
    PieceRechange toEntity(PieceRechangeDTO pieceRechangeDTO);
}
