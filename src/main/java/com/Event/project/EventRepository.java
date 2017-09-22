package com.Event.project;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("eventRepository")
public interface EventRepository extends JpaRepository<Event, Long> {

}