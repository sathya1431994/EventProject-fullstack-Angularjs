package com.Event.project;

import java.util.List;

public interface EventService {

    public List<Event> getAll();

    public Event save(Event event);

    public Event find(long id);

    public void delete(Long id);

}