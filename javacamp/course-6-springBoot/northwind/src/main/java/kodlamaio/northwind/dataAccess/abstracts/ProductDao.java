package kodlamaio.northwind.dataAccess.abstracts;

import kodlamaio.northwind.entities.concretes.Product;
import kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface ProductDao extends JpaRepository<Product, Integer> { // Productta Entity olmali, 2. de ise  id type int oldugu icin  Integer eklendi

    Product getByProductName(String productName); //Product getProductByProductName(String productName);
//    Product getById(int id);

    // getby ile tablodaki ilgili column'a gore where kosulu ekleniyor

    Product getByProductNameAndCategory_CategoryId(String productName, int categoryId); //Producta Category oldugu icin func. signature bu sekilde yazdik

    List<Product> getByProductNameOrCategory_CategoryId(String productName, int categoryId);

    //select * from  products where product_name = abc OR category_id
    List<Product> getByCategory_CategoryIdIn(List<Integer> categories);

    //getBy ile baslayan fonksiyonlar hazir yazilmis fonksiyonlar.

    List<Product> getByProductNameContains(String productName);

    List<Product> getByProductNameStartsWith(String productName);

    @Query("From Product where productName=:productName and category.categoryId=:categoryId")
    /** Veri tabaninda category tablosunda category_id olmasina ragmen burada category.categoriId oldu.
     * Cunku burada category ve id'sini javada tanimladigimiz variablelari ile yazdik.
     * ALTIN KURAL : VT tablosunu unutun
     */
    List<Product> getByNameAndCategory_CategoryId(String productName, int categoryId);

    //Query gerceklestirecegimiz icin productname veya category id yazmadik, name ve category yazdik.

    // oneToMany iliskisi varsa once one yazip sonra Many'e gidilmeli
    @Query("Select new  kodlamaio.northwind.entities.dtos.ProductWithCategoryDto" +
            "(p.id,p.productName,p.category.categoryName) " +
            "From Category c Inner JOIN c.products p")
    List<ProductWithCategoryDto> getProductWithCategoryDetails();


}
