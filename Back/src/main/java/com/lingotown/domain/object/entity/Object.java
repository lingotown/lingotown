package com.lingotown.domain.object.entity;

import com.lingotown.domain.world.entity.World;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Object {

    @Id
    @GeneratedValue
    @Column(name = "object_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    @JoinColumn(name = "world_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private World world;
}
