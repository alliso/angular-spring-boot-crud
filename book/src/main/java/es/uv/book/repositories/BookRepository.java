package es.uv.book.repositories;

import org.springframework.stereotype.Repository;

import es.uv.book.entities.Book;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{
    
}
