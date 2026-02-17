# TODO Remediation Plan

Generated: 2026-02-17

This document captures all actionable `TODO` markers found in content files and defines the required documentation/content updates to resolve them.

## Scan Summary

- Actionable TODOs: 15
- Non-actionable match: `pnpm-lock.yaml` contains `XXX` as part of an integrity hash (not a TODO)

## Required Changes

| # | File | Current TODO | Required change to resolve | Completion criteria | Status |
|---|---|---|---|---|---|
| 1 | `content/teaching/curriculum_design.mdx:69` | Large commented workshop-planning prompt block | Replace the commented block with a published example section (either `Callout` + fenced prompt or `Chat` example) that uses the existing curriculum design voice and a realistic education scenario. Remove template placeholders like `{{WORKSHOP_DURATION}}`. | No commented TODO block remains; users can copy a complete workshop-planning prompt from the page. | done (2026-02-17) |
| 2 | `content/teaching/curriculum_design.mdx:115` | "Using AI to plan interactive lessons" | Add a subsection under the interactive-learning step describing how to plan interaction patterns (think-pair-share, role play, case discussions), including one concrete prompt template and one refinement prompt. | Section includes actionable guidance plus at least 2 usable prompts. | open |
| 3 | `content/teaching/feedback.mdx:9` | "Using AI to generate personalized feedback" | Replace placeholder page content with a full guide: when to use AI for feedback, how to preserve instructor voice, rubric-anchored prompting, privacy guardrails (no sensitive student data), and examples. | Page no longer says "Content coming soon"; includes at least one end-to-end prompt example and a caution callout. | open |
| 4 | `content/teaching/lesson_planning.mdx:6` | "Alignment with learning goals" | Add a short section connecting outcomes, activities, and assessment checks. Include a prompt that asks the model to verify alignment and identify mismatches. | New alignment subsection present with one explicit alignment-check prompt. | open |
| 5 | `content/teaching/admin_work.mdx:10` | TODO list: emails, proposals, etc. | Expand the page beyond email drafting to include at least two additional admin workflows (for example: proposal drafting and announcement writing), each with an example prompt and review checklist. | TODO block removed; page has at least 3 admin use cases with prompts. | open |
| 6 | `content/prompting/assign_job.mdx:19` | "refine the role prompt examples and provide outputs" | Replace placeholder chat bubbles ("[...]") with concrete before/after role-prompting examples that show measurable quality improvement (audience, tone, structure). | Examples include specific user prompts and realistic assistant outputs, not placeholders. | open |
| 7 | `content/prompting/use_delimiters.mdx:62` | "good, somewhat long delimiter-based prompt" | Add one substantial delimiter-heavy prompt example (education task) using clearly labeled sections like `<context>`, `<constraints>`, `<rubric>`, `<output_format>`. | New long example is copyable and demonstrates at least 4 delimiter sections. | open |
| 8 | `content/prompting/chain_of_thought_prompting.mdx:26` | "Examples for CoT-Prompts" | Add at least two additional CoT examples for realistic educator tasks (e.g., lesson sequencing and grading rationale), not only arithmetic. | Section contains at least 2 non-trivial CoT prompt examples beyond the apple example. | open |
| 9 | `content/prompting/chain_of_thought_prompting.mdx:27` | "ask questions about uncertainty" | Add explicit guidance instructing the model to list assumptions and ask clarifying questions before answering when context is missing. | Guidance text and one corresponding prompt snippet are present. | open |
| 10 | `content/prompting/give_examples.mdx:55` | Mention structure replication (`A:` and quotes) | Add a brief callout explaining that the model copied formatting patterns from examples (`Q:`/`A:` and quote style), reinforcing consistency principle. | Callout added directly below the sample. | open |
| 11 | `content/prompting/give_examples.mdx:59` | Education-related few-shot prompt | Add a domain-relevant few-shot example (education context), such as feedback comments, rubric scoring justifications, or learning-objective rewrites. | At least one education-specific few-shot example is published. | open |
| 12 | `content/prompting/give_examples.mdx:61` | Notes about output format/style | Convert the comment notes into a short "Specify output format and style" subsection with bullets (length, format, tone/language) plus an example prompt. | Comment removed and replaced by visible guidance section. | open |
| 13 | `content/genai/when_to_use.mdx:16` | Expand algorithmic-augmented decision-making | Add a concise explanation of human-in-the-loop vs automated decision-making in education, including what decisions should never be fully automated and why. | Paragraph added with practical examples of safe vs unsafe delegation. | open |
| 14 | `content/genai/ai_detection.mdx:46` | Link to novel assessment methods | Add internal links to concrete alternative assessment resources (for example `/students/exams` and any relevant assessment pages/anchors). | TODO removed and at least one clear cross-link added in context. | open |
| 15 | `content/genai/ai_detection.mdx:48` | "ghost writers anyway" point | Add a short paragraph framing the evidentiary limit: authorship certainty was difficult before AI too; emphasize process evidence, draft history, and oral defense over detector certainty. | Paragraph added with neutral, policy-relevant framing and no TODO remains. | open |

## Recommended Execution Order

1. Resolve page placeholders first: `feedback.mdx`, `admin_work.mdx`.
2. Resolve prompting examples next: `assign_job.mdx`, `use_delimiters.mdx`, `chain_of_thought_prompting.mdx`, `give_examples.mdx`.
3. Finish conceptual framing updates: `when_to_use.mdx`, `ai_detection.mdx`, `curriculum_design.mdx`, `lesson_planning.mdx`.

## Verification Checklist

- Run `pnpm build` after updates to catch MDX/route issues.
- Verify changed pages in `pnpm dev`, including rendered callouts/chat components.
- Confirm no unresolved `TODO` markers remain in `content/` for completed files.
