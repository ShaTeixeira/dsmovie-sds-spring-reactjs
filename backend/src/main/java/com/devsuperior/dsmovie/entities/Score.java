package com.devsuperior.dsmovie.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.EmbeddedId;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	private ScorePK id = new ScorePK();
	
	private Double value;
	
	public Score() {
		
	}
	
	public void setMovie(Movie movie) {
		id.setMovie(movie); //salvar a referencia do movie 
	}
	
	public void setUser(User user) {
		id.setUser(user); //salvar a referencia do usuario
	}


	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
	
}
