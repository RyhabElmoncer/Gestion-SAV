package com.sav.gestion_sav.DTO;

public class ClientDTO {
    private Long id;
    private String username;
    private String email;
    private String lastName;
    private String role;

    public static ClientDTOBuilder clientBuilder() {
        return new ClientDTOBuilder();
    }

    // Vos autres méthodes et le builder pour ClientDTO
    public static class ClientDTOBuilder {
        // Implémentation spécifique à ClientDTO
    }
}
