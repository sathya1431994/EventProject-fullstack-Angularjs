package com.Event.project;

import javax.persistence.*;

@Entity
public class Agenda {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String atime;
	private String adesc;
	private String ains;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "eid", updatable = false, insertable = true)
	private Event event;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAtime() {
		return atime;
	}

	public void setAtime(String atime) {
		this.atime = atime;
	}

	public String getAdesc() {
		return adesc;
	}

	public void setAdesc(String adesc) {
		this.adesc = adesc;
	}

	public String getAins() {
		return ains;
	}

	public void setAins(String ains) {
		this.ains = ains;
	}

	public void setEvent(Event event) {
		this.event = event;
	}
}