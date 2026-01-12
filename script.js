/*
  Portfolio interactions
  - Theme toggle (persistent)
  - Live time in nav
  - Mobile drawer menu (accessible)
  - Smooth scroll with offset
  - Scroll-spy nav highlight
  - Reveal-on-scroll animations
*/

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTime();
  initYear();
  initMobileDrawer();
  initSmoothScroll();
  initScrollSpy();
  initReveal();
  initWeeklyStreak();
});

function initTheme() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const saved = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark-theme", saved === "dark");
  updateThemeIcon(btn);

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const current = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", current);
    updateThemeIcon(btn);
  });
}

function updateThemeIcon(btn) {
  const icon = btn.querySelector("i");
  if (!icon) return;
  icon.className = document.body.classList.contains("dark-theme")
    ? "fas fa-sun"
    : "fas fa-moon";
}

function initTime() {
  const timeEl = document.getElementById("current-time");
  if (!timeEl) return;

  const update = () => {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  update();
  setInterval(update, 1000);
}

function initYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function initMobileDrawer() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const drawer = document.getElementById("mobile-drawer");
  const closeBtn = document.getElementById("mobile-close");

  if (!toggle || !drawer) return;

  const focusableSelector =
    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

  let lastFocused = null;

  const open = () => {
    lastFocused = document.activeElement;
    drawer.hidden = false;
    drawer.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.classList.add("is-open");

    // Focus the first focusable element in the panel
    const panel = drawer.querySelector(".mobile-drawer-panel");
    const focusables = panel ? panel.querySelectorAll(focusableSelector) : [];
    if (focusables.length) focusables[0].focus();
  };

  const close = () => {
    drawer.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.classList.remove("is-open");

    // allow transition to finish
    window.setTimeout(() => {
      drawer.hidden = true;
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }, 160);
  };

  const isOpen = () => !drawer.hidden;

  toggle.addEventListener("click", () => (isOpen() ? close() : open()));
  if (closeBtn) closeBtn.addEventListener("click", close);

  drawer.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.hasAttribute && target.hasAttribute("data-close-drawer")) {
      close();
    }
  });

  // Escape closes
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) close();
  });

  // Focus trap
  drawer.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || !isOpen()) return;

    const panel = drawer.querySelector(".mobile-drawer-panel");
    if (!panel) return;

    const focusables = Array.from(panel.querySelectorAll(focusableSelector))
      .filter((el) => el.offsetParent !== null);

    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

function initSmoothScroll() {
  // Smooth scroll for internal anchors with fixed-nav offset
  const offset = 84; // navbar height + breathing room

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });
  });
}

function initScrollSpy() {
  const links = Array.from(document.querySelectorAll(".nav-link[href^='#']"));
  if (!links.length) return;

  const ids = links
    .map((l) => l.getAttribute("href"))
    .filter(Boolean)
    .map((h) => h.replace("#", ""));

  const sections = ids
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((l) => {
      const match = l.getAttribute("href") === `#${id}`;
      l.classList.toggle("active", match);
    });
  };

  const handler = () => {
    const y = window.scrollY;
    const offset = 120;

    let current = sections[0] ? sections[0].id : "";

    for (const section of sections) {
      if (y + offset >= section.offsetTop) current = section.id;
    }

    if (current) setActive(current);
  };

  handler();
  window.addEventListener("scroll", handler, { passive: true });
}

function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!els.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach((el) => io.observe(el));
}


function initWeeklyStreak() {
  const dataEl = document.getElementById("weekly-data");
  const listEl = document.getElementById("weekly-list");
  if (!dataEl || !listEl) return;

  let items = [];
  try {
    items = JSON.parse((dataEl.textContent || "").trim());
  } catch (e) {
    console.warn("Could not parse weekly streak data:", e);
    return;
  }

  if (!Array.isArray(items) || items.length === 0) {
    listEl.innerHTML =
      '<p class="muted">Add entries in the <code>#weekly-data</code> JSON to show your sessions.</p>';
    return;
  }

  const parseDate = (s) => {
    const parts = (s || "").split("-").map((v) => parseInt(v, 10));
    if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  };

  const fmt = (d) =>
    d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

  // Normalize + sort desc (newest first)
  items = items
    .map((it) => ({ ...it, _date: parseDate(it.date) }))
    .filter((it) => it._date instanceof Date && !Number.isNaN(it._date.valueOf()))
    .sort((a, b) => b._date - a._date);

  // Render list
  listEl.innerHTML = "";
  items.forEach((it) => {
    const d = it._date;
    const details = document.createElement("details");
    details.className = "weekly-item";

    const summary = document.createElement("summary");

    const dateEl = document.createElement("span");
    dateEl.className = "weekly-date";
    dateEl.textContent = d.toLocaleDateString(undefined, { month: "short", day: "numeric" });

    const titleEl = document.createElement("span");
    titleEl.className = "weekly-title";
    titleEl.textContent = it.title || "Session";

    const chips = document.createElement("span");
    chips.className = "weekly-chips";

    (it.skills || []).slice(0, 6).forEach((s) => {
      const chip = document.createElement("span");
      chip.className = "skill-chip";

      if (s && s.icon) {
        const icon = document.createElement("i");
        icon.className = s.icon;
        icon.setAttribute("aria-hidden", "true");
        chip.appendChild(icon);
      }

      const label = document.createElement("span");
      label.textContent = (s && s.label) || "";
      chip.appendChild(label);

      chips.appendChild(chip);
    });

    summary.appendChild(dateEl);
    summary.appendChild(titleEl);
    summary.appendChild(chips);

    const body = document.createElement("div");
    body.className = "weekly-body";

    const p = document.createElement("p");
    p.innerHTML = `<strong>${fmt(d)}:</strong> ${escapeHtml(it.summary || "")}`;
    body.appendChild(p);

    details.appendChild(summary);
    details.appendChild(body);

    listEl.appendChild(details);
  });
}


function escapeHtml(unsafe) {
  return String(unsafe)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
