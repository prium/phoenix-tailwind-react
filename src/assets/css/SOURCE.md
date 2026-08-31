Copied verbatim from ../phoenix-tailwind/src/css at commit b9ac89e97 (hummingbird 1.4.0).
Only index.css is app-specific; keep the rest in sync with phoenix-tailwind.

Local patch ahead of that commit (applied in the phoenix-tailwind working tree
too, but not yet committed there): components/avatar.css defaults
--avatar-width/--avatar-height to var(--avatar-size) so .avatar-group avatars
keep a fixed size for every avatar-* size instead of sizing from each image's
intrinsic resolution. Drop this note once phoenix-tailwind commits the fix.
