package com.opencanvas.controller;

import com.opencanvas.model.VibeRequest;
import com.opencanvas.model.VibeResponse;
import com.opencanvas.service.VibeService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class VibeController {

    private final VibeService vibeService;

    public VibeController(VibeService vibeService) {
        this.vibeService = vibeService;
    }

    @PostMapping("/vibe")
    public VibeResponse createVibe(@RequestBody VibeRequest request) {
        return vibeService.createVibe(request.message());
    }
}
