package com.opencanvas.service;

import com.opencanvas.model.VibeResponse;
import org.springframework.stereotype.Service;

@Service
public class VibeService {

    public VibeResponse createVibe(String message) {
        // TODO: call Anthropic Claude API and return structured vibe config
        return new VibeResponse(
                "soft-rain",
                "dark-muted",
                50,
                "gentle",
                "Placeholder response for: " + message
        );
    }
}
