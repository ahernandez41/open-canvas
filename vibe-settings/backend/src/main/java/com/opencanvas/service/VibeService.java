package com.opencanvas.service;

import com.opencanvas.model.VibeResponse;
import org.springframework.stereotype.Service;

@Service
public class VibeService {

    public VibeResponse createVibe(String message) {
        String normalized = message == null ? "" : message.trim().toLowerCase();

        if (normalized.isEmpty()) {
            return new VibeResponse(
                    "soft-rain",
                    "dark-muted",
                    45,
                    "gentle",
                    "Describe your mood or goal to set the perfect vibe."
            );
        }

        if (containsAny(normalized, "focus", "work", "study", "deep")) {
            return new VibeResponse(
                    "coffee-shop",
                    "green-contrast",
                    25,
                    "steady",
                    "A focused productivity vibe with a warm, energized workspace feel."
            );
        }

        if (containsAny(normalized, "relax", "calm", "chill", "wind down", "rest")) {
            return new VibeResponse(
                    "soft-rain",
                    "dark-muted",
                    40,
                    "gentle",
                    "A calm, soothing vibe to help you unwind and recharge."
            );
        }

        if (containsAny(normalized, "creative", "create", "brainstorm", "inspire", "imagine")) {
            return new VibeResponse(
                    "lofi-beats",
                    "sunset-glow",
                    35,
                    "spark",
                    "A creative vibe designed to help your ideas flow naturally."
            );
        }

        if (containsAny(normalized, "energetic", "party", "motivation", "pump", "hype")) {
            return new VibeResponse(
                    "synth-wave",
                    "neon-bright",
                    30,
                    "pulsing",
                    "A high-energy vibe built to keep momentum and confidence up."
            );
        }

        if (containsAny(normalized, "anxious", "stressed", "overwhelmed", "panic", "burnout")) {
            return new VibeResponse(
                    "forest-breeze",
                    "soft-blue",
                    20,
                    "gentle",
                    "A grounding vibe to bring calm and steady your focus."
            );
        }

        return new VibeResponse(
                "soft-rain",
                "dark-muted",
                50,
                "gentle",
                "Your vibe is set — enjoy a smooth, balanced session."
        );
    }

    private boolean containsAny(String text, String... keywords) {
        for (String keyword : keywords) {
            if (text.contains(keyword)) {
                return true;
            }
        }
        return false;
    }
}
