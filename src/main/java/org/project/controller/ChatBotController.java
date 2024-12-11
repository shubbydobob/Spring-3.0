package org.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/chatbot")
public class ChatBotController {

   @GetMapping("/chatbot")
   public String showChatPage() {
      return "/chatbot/chatbot";
   }
}