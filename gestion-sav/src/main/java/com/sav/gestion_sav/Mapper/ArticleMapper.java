package com.sav.gestion_sav.Mapper;

import com.sav.gestion_sav.DTO.ArticleDTO;
import com.sav.gestion_sav.Model.Article;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ArticleMapper {
    ArticleDTO toDTO(Article article);
    Article toEntity(ArticleDTO articleDTO);
}
