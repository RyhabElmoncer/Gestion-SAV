package com.sav.gestion_sav.Mapper;

import com.sav.gestion_sav.DTO.UserDTO;
import com.sav.gestion_sav.Model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO toDTO(User user);
    User toEntity(UserDTO userDTO);
}
