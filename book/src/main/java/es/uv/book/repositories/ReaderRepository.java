package es.uv.book.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import es.uv.book.entities.Reader;

@Repository
public interface ReaderRepository extends JpaRepository<Reader, Long> {
    
}
