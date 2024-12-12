package org.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/worker")
public class WorkController {

	@GetMapping("/worker_calendar")
	public String showWorkerCalendarPage(Model model) {
		return "worker/worker_calendar";
	}
}
