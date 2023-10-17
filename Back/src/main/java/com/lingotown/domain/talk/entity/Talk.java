package com.lingotown.domain.talk.entity;

import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.talkdetail.entity.TalkDetail;
import com.lingotown.global.baseTimeEntity.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Talk  extends BaseTimeEntity {

    @Id
    @Column(name = "talk_id")
    private Long id;

    private LocalDateTime deleteAt;

    @Column(nullable = false)
    @JoinColumn(name = "member_npc_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private MemberNPC memberNPC;

    @OneToMany(mappedBy = "talk_detail",cascade = CascadeType.ALL)
    List<TalkDetail> talkDetailList = new ArrayList<>();

}