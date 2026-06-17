<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3
# Open Canvas

A focus space for creatives that eases you in instead of just timing you. You don't just "start working", you settle into a ritual... in an atmosphere tuned to you. The hunt for the perfect setup is the distraction; this application does the hunting for you.

## The Idea

Matching a vibe to a person is fuzzy and personal... exactly what AI is good at. Instead of manually picking a soundscape, timer, and theme, you describe your state in plain language and the app configures the whole environment.

<<<<<<< HEAD
> "Detailed linework, feeling anxious, need to lock in for a couple hours"
> → soft rain ambiance · muted dark theme · 50-min timer · gentle check-ins

> "Sketching loose ideas, low energy, want to feel hyped"
> → upbeat lofi · warm colors · 15-min sprints · warm-up doodle prompt

## The User Journey

### Before — warm-up
- **Intention setting**: type what you want to accomplish; AI turns it into a session plan.
- **Warm-up**: a short loosener based on your medium and mood ("5 quick gesture sketches").
- **Ritual profiles**: the app learns your routine and recreates it each time.

### During — focus
- **Art-block breaker**: an "I'm stuck" button with prompts tuned to your style, project, and mood.
- **Adaptive nudges**: gentle check-ins when a session runs long.
- **Constraint sparks**: creative limits to break paralysis ("3 colors only," "draw it from below").

### After — reflection
- **Session reflection**: a quick "how'd that go?" that logs patterns over time.
- **Focus profile**: learns what works for you ("You focus best with rain + 50-min sprints in the morning").

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
3. **Vibe Setup** input (the star feature)
4. Art-block prompt button

## Tech Stack

**Frontend (JavaScript)**
- **React + Vite**: fast single-page app
- **Tailwind CSS**: easy theme/mood switching
- **Howler.js**: soundscape playback

**Backend (Java)**
- **Spring Boot**: REST API
- **PostgreSQL**: user profiles & session history (add later)

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
=======
Open Canvas

A focus space for creatives that eases you in instead of just timing you. You don't just "start working", you settle into a ritual... in an atmosphere tuned to you. The hunt for the perfect setup is the distraction; this application does the hunting for you.
The Idea

Matching a vibe to a person is fuzzy and personal... exactly what AI is good at. Instead of manually picking a soundscape, timer, and theme, you describe your state in plain language and the app configures the whole environment.

=======
>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3
    "Detailed linework, feeling anxious, need to lock in for a couple hours" → soft rain ambiance · muted dark theme · 50-min timer · gentle check-ins

    "Sketching loose ideas, low energy, want to feel hyped" → upbeat lofi · warm colors · 15-min sprints · warm-up doodle prompt

<<<<<<< HEAD
The User Journey
Before — warm-up
=======
## The User Journey
## Before — warm-up
>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3

    Intention setting: type what you want to accomplish; AI turns it into a session plan.
    Warm-up: a short loosener based on your medium and mood ("5 quick gesture sketches").
    Ritual profiles: the app learns your routine and recreates it each time.

<<<<<<< HEAD
During — focus
=======
## During — focus
>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3

    Art-block breaker: an "I'm stuck" button with prompts tuned to your style, project, and mood.
    Adaptive nudges: gentle check-ins when a session runs long.
    Constraint sparks: creative limits to break paralysis ("3 colors only," "draw it from below").

<<<<<<< HEAD
After — reflection
=======
## After — reflection
>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3

    Session reflection: a quick "how'd that go?" that logs patterns over time.
    Focus profile: learns what works for you ("You focus best with rain + 50-min sprints in the morning").

<<<<<<< HEAD
Vibe Archetypes
=======
## Vibe Archetypes
>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3

The app places you on a spectrum and tunes sound, color, timer length, and prompt tone to match.
Archetype 	Vibe 	Environment
Deep Diver 	calm, long focus 	ambient/rain, dark theme, longer pomodoro setting 50-min timers
Spark-Seeker 	energetic, momentum 	upbeat lofi, warm colors, 15-min sprints
Overwhelmed 	low-pressure 	nature sounds, soft theme, short 10-min starts
Ritualist 	structured routine 	warm-up → intention → sprint sequence
What to Build First

<<<<<<< HEAD
MVP — a clean single-page focus space:
=======
## MVP — a clean single-page focus space:
>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3

    Curated soundscapes player
    Timer
    Vibe Setup input (the star feature)
    Art-block prompt button

<<<<<<< HEAD
Tech Stack

Frontend (JavaScript)
=======
## Tech Stack

### Frontend (JavaScript)
>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3

    React + Vite: fast single-page app
    Tailwind CSS: easy theme/mood switching
    Howler.js: soundscape playback

<<<<<<< HEAD
Backend (Java)
=======
### Backend (Java)
>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3

    Spring Boot: REST API
    PostgreSQL: user profiles & session history (add later)

<<<<<<< HEAD
AI Layer

    Anthropic Claude API, called from Spring Boot. The Concierge sends your text and gets back a JSON vibe config (sound, theme, timer) that the frontend applies.

Flow

React  →  Spring Boot  →  LLM API
                │
            PostgreSQL
=======
## AI Layer

    Anthropic Claude API, called from Spring Boot. The Concierge sends your text and gets back a JSON vibe config (sound, theme, timer) that the frontend applies.

## Flow

React  →  Spring Boot  →  LLM API
              │
          PostgreSQL
>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3

For the MVP: React frontend + one endpoint (POST /api/vibe) that turns text into a vibe config. Soundscapes and timer live in the browser; add Postgres later for the reflection/learning layer.
Status

<<<<<<< HEAD
Early concept. Next step: scaffold the single-page focus space.
>>>>>>> fafdd21 (Project Base with README.)
=======
## Getting Started

### Pre-reqs
- Node.js 18+ and npm
- Java 22 (JDK)

### Frontend
cd vibe-settings/frontend
npm install
npm run dev
→ http://localhost:5173

### Backend
cd vibe-settings/backend
.\gradlew.bat bootRun
→ http://localhost:8080

### Test the API
Invoke-RestMethod -Uri "http://localhost:8080/api/vibe" -Method POST .

>>>>>>> 0feaab518c17b196a9cfee08e4c8c102345bdfb3
