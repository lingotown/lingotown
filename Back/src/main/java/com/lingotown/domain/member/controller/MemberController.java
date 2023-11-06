package com.lingotown.domain.member.controller;

import com.lingotown.domain.member.dto.request.EditNicknameReqDto;
import com.lingotown.domain.member.dto.response.EditProfileResDto;
import com.lingotown.domain.member.dto.response.MemberInfoResponseDto;
import com.lingotown.domain.member.service.MemberService;
import com.lingotown.domain.member.service.QuizMemberService;
import com.lingotown.domain.world.dto.response.ReadMemberQuizResDto;
import com.lingotown.global.response.CommonResponse;
import com.lingotown.global.response.DataResponse;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class MemberController {

    private final MemberService memberService;
    private final QuizMemberService quizMemberService;

    @GetMapping
    public DataResponse<MemberInfoResponseDto> readUserInfo(Principal principal) {
        return memberService.readMemberInfo(principal);
    }

    @GetMapping("/quiz/{worldId}")
    public DataResponse<List<ReadMemberQuizResDto>> readSolvedQuiz(Principal principal, @PathVariable("worldId") Long worldId){
        return quizMemberService.readSolvedQuiz(principal, worldId);
    }

    @DeleteMapping("/leave")
    public CommonResponse removeMember(Principal principal) {
       return memberService.removeMember(principal);
    }

    @PutMapping("/nickname")
    public CommonResponse editNickname(Principal principal, @RequestBody EditNicknameReqDto editNicknameReqDto) {
        return memberService.editNickname(principal, editNicknameReqDto);
    }

    @PutMapping(value = "/profile",  consumes = {"multipart/form-data"})
    public DataResponse<EditProfileResDto> editProfile(Principal principal, @RequestPart(value = "profile") MultipartFile file) throws IOException {
        return memberService.editProfile(principal, file);
    }

}
