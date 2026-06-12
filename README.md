# Empty Canvas

A focus space for creatives that eases you in instead of just timing you. You don't just "start working" — you settle into a ritual, in an atmosphere tuned to you. The hunt for the perfect setup is the distraction; the app does the hunting for you.

## The Idea

Matching a vibe to a person is fuzzy and personal — exactly what AI is good at. Instead of manually picking a soundscape, timer, and theme, you describe your state in plain language and the app configures the whole environment.

> "Detailed linework, feeling anxious, need to lock in for a couple hours"
> → soft rain ambiance · muted dark theme · 50-min timer · gentle check-ins

> "Sketching loose ideas, low energy, want to feel hyped"
> → upbeat lofi · warm colors · 15-min sprints · warm-up doodle prompt

## The User Journey

### Before — warm-up
- **Intention setting** — type what you want to accomplish; AI turns it into a session plan.
- **Warm-up** — a short loosener based on your medium and mood ("5 quick gesture sketches").
- **Ritual profiles** — the app learns your routine and recreates it each time.

### During — focus
- **Art-block breaker** — an "I'm stuck" button with prompts tuned to your style, project, and mood.
- **Adaptive nudges** — gentle check-ins when a session runs long.
- **Constraint sparks** — creative limits to break paralysis ("3 colors only," "draw it from below").

### After — reflection
- **Session reflection** — a quick "how'd that go?" that logs patterns over time.
- **Focus profile** — learns what works for you ("You focus best with rain + 50-min sprints in the morning").

## Vibe Archetypes

The app places you on a spectrum and tunes sound, color, timer length, and prompt tone to match.

| Archetype | Vibe | Environment |
| --- | --- | --- |
| Deep Diver | calm, long focus | ambient/rain, dark theme, longer pomodoro setting 50-min timers |
| Spark-Seeker | energetic, momentum | upbeat lofi, warm colors, 15-min sprints |
| Overwhelmed | low-pressure | nature sounds, soft theme, short 10-min starts |
| Ritualist | structured routine | warm-up → intention → sprint sequence |

## What to Build First

**MVP** — a clean single-page focus space:
1. Curated soundscapes player
2. Timer
3. **Vibe Concierge** input (the star feature)
4. Art-block prompt button

**Later** — reflection, learning, and the personal focus profile.

**Skip for now** — AI-generated music or art, chatbots for chatting's sake.

## Tech Stack

**Frontend (JavaScript)**
- **React + Vite** — fast single-page app
- **Tailwind CSS** — easy theme/mood switching
- **Howler.js** — soundscape playback

**Backend (Java)**
- **Spring Boot** — REST API
- **PostgreSQL** — user profiles & session history (add later)

**AI Layer**
- **Anthropic Claude API**, called from Spring Boot. The Concierge sends your text and gets back a JSON vibe config (sound, theme, timer) that the frontend applies.

**Flow**

```
React  →  Spring Boot  →  LLM API
                │
            PostgreSQL
```

For the MVP: React frontend + one endpoint (`POST /api/vibe`) that turns text into a vibe config. Soundscapes and timer live in the browser; add Postgres later for the reflection/learning layer.

## Status

Early concept. Next step: scaffold the single-page focus space.
