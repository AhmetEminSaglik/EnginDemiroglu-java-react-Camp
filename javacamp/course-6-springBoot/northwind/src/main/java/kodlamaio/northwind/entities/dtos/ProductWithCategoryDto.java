package kodlamaio.northwind.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductWithCategoryDto {
    /**
     * Dto->Data transformation  Object --> Transfer edilen Obje
     * Tek tabloda bile kullanilmali
     */
    private int id;
    private String productName;
    private String categoryName;



}
