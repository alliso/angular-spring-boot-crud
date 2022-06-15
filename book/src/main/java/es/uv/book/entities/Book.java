package es.uv.book.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name="books")
public class Book {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "title", length = 50, nullable = false, unique = true)
    private String title;

    @Column(name = "author", length = 50, nullable = false, unique = false)
    private String author;

    @Column(name = "description", length = 50)
    private String description;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }
}
