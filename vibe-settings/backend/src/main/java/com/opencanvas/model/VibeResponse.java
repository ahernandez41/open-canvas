package com.opencanvas.model;

public record VibeResponse(
        String soundscape,
        String theme,
        int timerMinutes,
        String checkIns,
        String message
) {
}
