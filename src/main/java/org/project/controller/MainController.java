package org.project.controller;

import java.util.HashMap;

import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping ("/main")
public class MainController {
	
	
	@GetMapping("/main_guest")
	public String showMainGusetPage() {
		return "main/main_guest";
	}
	
	@GetMapping("/main_worker")
	public String showMainWorkerPage() {
		return "main/main_worker";
	}
}