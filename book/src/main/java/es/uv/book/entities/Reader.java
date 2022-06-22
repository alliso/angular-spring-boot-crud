package es.uv.book.entities;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.JoinColumn;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
@Table(name = "readers")
public class Reader {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NonNull
    @Column(length = 50, nullable = false)
    private String firstName;

    @NonNull
    @Column(length = 50, nullable = false)
    private String lastName;
    
    @ManyToMany
    @JoinTable( name = "readers_book", 
                joinColumns = @JoinColumn(name = "reader_id"),
                inverseJoinColumns = @JoinColumn(name = "book_id"))
    private List<Book> linkedBooks;

    public boolean addReadBook(Book book) {
        return linkedBooks.add(book);
    }

    public boolean deleteReadBook(Book book) {
        return linkedBooks.remove(book);
    }
}
