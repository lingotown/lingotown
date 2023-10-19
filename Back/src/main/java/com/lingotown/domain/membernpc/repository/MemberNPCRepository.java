package com.lingotown.domain.membernpc.repository;

import com.lingotown.domain.membernpc.entity.MemberNPC;
import com.lingotown.domain.talk.entity.Talk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MemberNPCRepository extends JpaRepository<MemberNPC, Long> {

    List<Talk> findAllByTalkListDeleteAtIsNullAndId(Long memberNPCId);

    //
    // @Query("select mn from MemberNPC as mn join Talk as t where mn.id=:id and t.deleteAt is null")
    // List<Talk> findTalkList(Long memberNPCId);


    @Query("select mn from MemberNPC as mn where mn.member.id = :memberId and mn.npc.id = :npcId")
    MemberNPC findByMemberIdNPCId(@Param("memberId") Long memberId, @Param("npcId") Long npcId);
}