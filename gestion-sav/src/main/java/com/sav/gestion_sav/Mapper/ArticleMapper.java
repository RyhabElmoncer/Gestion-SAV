package com.sav.gestion_sav.Mapper;

import com.sav.gestion_sav.DTO.ArticleDTO;
import com.sav.gestion_sav.Model.Article;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ArticleMapper {
    @Mapping(source = "dateAchat", target = "dateAchat")
    @Mapping(source = "cin", target = "cin")
    ArticleDTO toDTO(Article article);

    @Mapping(source = "dateAchat", target = "dateAchat")
    @Mapping(source = "cin", target = "cin")
    Article toEntity(ArticleDTO articleDTO);
}