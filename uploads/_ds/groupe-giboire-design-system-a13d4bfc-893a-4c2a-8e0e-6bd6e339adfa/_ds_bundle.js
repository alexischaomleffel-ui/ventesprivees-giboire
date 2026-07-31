/* @ds-bundle: {"format":4,"namespace":"GroupeGiboireDesignSystem_a13d4b","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"SquareMarker","sourcePath":"components/layout/SquareMarker.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"8d467aab21ad","components/core/Badge.jsx":"775cb5cdf204","components/core/Button.jsx":"cf8eb333f66f","components/core/IconButton.jsx":"cd84da3aa4b4","components/core/Tag.jsx":"8ca9a70ed8aa","components/feedback/Alert.jsx":"69f9475f8516","components/feedback/Dialog.jsx":"5bbdda97676b","components/feedback/Tooltip.jsx":"a2db80eea086","components/forms/Checkbox.jsx":"d3e25e759922","components/forms/Field.jsx":"6a34ad2f1f07","components/forms/Input.jsx":"e7826678e71e","components/forms/Radio.jsx":"b99e00db6b4d","components/forms/Select.jsx":"be9011adda7b","components/forms/Switch.jsx":"3010feab1b97","components/forms/Textarea.jsx":"de8e9610fb73","components/layout/Card.jsx":"7b913d482a00","components/layout/Divider.jsx":"f0475025567c","components/layout/SquareMarker.jsx":"c531e72c7f55","components/navigation/Breadcrumb.jsx":"a3dd5744fa58","components/navigation/Tabs.jsx":"31df33f6dd8f","ui_kits/client-portal/DashboardScreen.jsx":"936f82f52869","ui_kits/client-portal/LoginScreen.jsx":"99e28cd04e17","ui_kits/client-portal/ProjectScreen.jsx":"9321438aed36","ui_kits/client-portal/Shell.jsx":"452c272b2f44","ui_kits/client-portal/data.js":"aada393dc4dd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GroupeGiboireDesignSystem_a13d4b = window.GroupeGiboireDesignSystem_a13d4b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/**
 * Groupe Giboire logotype.
 * - Pass `src` (path to the official PNG in assets/logo/) to render the real mark.
 * - Without `src`, renders the square CSS wordmark — a robust fallback for prototypes.
 * The square form and deep blue are fixed brand properties; never restyle them.
 */
function Logo({
  src,
  size = 96,
  mono = false,
  style = {}
}) {
  if (src) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "Groupe Giboire",
      width: size,
      height: size,
      style: {
        display: "block",
        ...style
      }
    });
  }
  const blue = mono ? "currentColor" : "var(--gib-blue-900)";
  return /*#__PURE__*/React.createElement("div", {
    "aria-label": "Groupe Giboire",
    role: "img",
    style: {
      width: size,
      height: size,
      boxSizing: "border-box",
      background: blue,
      color: "var(--gib-white)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: size * 0.11,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      textTransform: "uppercase",
      letterSpacing: "0.22em",
      fontSize: size * 0.12,
      lineHeight: 1,
      paddingLeft: "0.22em"
    }
  }, "Groupe"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 900,
      textTransform: "uppercase",
      letterSpacing: "0.01em",
      fontSize: size * 0.235,
      lineHeight: 0.95
    }
  }, "Giboire"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status label. Semantic tones drawn from the brand palette. */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      fg: "var(--color-text-muted)",
      bg: "var(--color-bg-subtle)",
      solidBg: "var(--gib-taupe-dark)"
    },
    brand: {
      fg: "var(--color-primary)",
      bg: "var(--gib-ivory)",
      solidBg: "var(--color-primary)"
    },
    accent: {
      fg: "#8a4028",
      bg: "var(--gib-peach)",
      solidBg: "var(--color-accent)"
    },
    success: {
      fg: "#4b5340",
      bg: "var(--color-success-bg)",
      solidBg: "var(--color-success)"
    },
    warning: {
      fg: "#7d5715",
      bg: "var(--color-warning-bg)",
      solidBg: "var(--color-warning)"
    },
    danger: {
      fg: "#7a3325",
      bg: "var(--color-danger-bg)",
      solidBg: "var(--color-danger)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.35em",
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "0.6875rem",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      padding: "0.25em 0.6em",
      borderRadius: "var(--radius-sm)",
      color: solid ? "var(--color-on-primary)" : tones.fg,
      background: solid ? tones.solidBg : tones.bg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Groupe Giboire — Button
 * Squared, elegant. Primary = deep blue; secondary = outline; ghost; accent = terracotta (dose with care).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0.4rem 0.85rem",
      fontSize: "0.8125rem",
      gap: "0.4rem"
    },
    md: {
      padding: "0.6rem 1.25rem",
      fontSize: "0.9375rem",
      gap: "0.5rem"
    },
    lg: {
      padding: "0.8rem 1.75rem",
      fontSize: "1.0625rem",
      gap: "0.6rem"
    }
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      border: "1.5px solid var(--color-primary)"
    },
    secondary: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1.5px solid var(--color-primary)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1.5px solid transparent"
    },
    accent: {
      background: "var(--color-accent)",
      color: "var(--color-on-accent)",
      border: "1.5px solid var(--color-accent)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: "var(--color-primary-hover)",
      borderColor: "var(--color-primary-hover)"
    },
    secondary: {
      background: "var(--color-bg-subtle)"
    },
    ghost: {
      background: "var(--color-bg-subtle)"
    },
    accent: {
      background: "var(--color-accent-hover)",
      borderColor: "var(--color-accent-hover)"
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: sizes[size].gap,
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1,
      letterSpacing: "0.01em",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      width: fullWidth ? "100%" : "auto",
      transition: "background .16s ease, border-color .16s ease, transform .08s ease",
      transform: active && !disabled ? "translateY(1px)" : "none",
      ...sizes[size],
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Icon-only square button. Use for toolbar / compact actions. */
function IconButton({
  children,
  variant = "secondary",
  size = "md",
  disabled = false,
  "aria-label": ariaLabel,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      border: "1.5px solid var(--color-primary)"
    },
    secondary: {
      background: "var(--color-surface)",
      color: "var(--color-primary)",
      border: "1.5px solid var(--color-border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-primary)",
      border: "1.5px solid transparent"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: "var(--color-primary-hover)",
      borderColor: "var(--color-primary-hover)"
    },
    secondary: {
      background: "var(--color-bg-subtle)"
    },
    ghost: {
      background: "var(--color-bg-subtle)"
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background .16s ease, border-color .16s ease",
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Removable chip / tag with a fine filet border. */
function Tag({
  children,
  onRemove,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45em",
      fontFamily: "var(--font-body)",
      fontSize: "0.8125rem",
      fontWeight: "var(--fw-regular)",
      color: "var(--color-text-body)",
      background: "var(--color-surface)",
      border: "1px solid var(--color-border-strong)",
      borderRadius: "var(--radius-sm)",
      padding: "0.25em 0.65em",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Retirer",
    onClick: onRemove,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: 0,
      lineHeight: 1,
      fontSize: "1.05em",
      color: hover ? "var(--color-accent)" : "var(--color-text-muted)",
      transition: "color .16s ease"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/** Inline message banner. Left filet accent in the tone color. */
function Alert({
  tone = "info",
  title,
  children,
  onClose,
  icon = null,
  style = {}
}) {
  const tones = {
    info: {
      accent: "var(--color-info)",
      bg: "var(--color-info-bg)"
    },
    success: {
      accent: "var(--color-success)",
      bg: "var(--color-success-bg)"
    },
    warning: {
      accent: "var(--color-warning)",
      bg: "var(--color-warning-bg)"
    },
    danger: {
      accent: "var(--color-danger)",
      bg: "var(--color-danger-bg)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: "flex",
      gap: "0.75rem",
      alignItems: "flex-start",
      background: tones.bg,
      borderLeft: `3px solid ${tones.accent}`,
      borderRadius: "var(--radius-sm)",
      padding: "0.85rem 1rem",
      fontFamily: "var(--font-body)",
      color: "var(--color-text-body)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: tones.accent,
      display: "flex",
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "0.9375rem",
      color: "var(--color-text)",
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.875rem",
      lineHeight: "var(--lh-normal)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Fermer",
    onClick: onClose,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--color-text-muted)",
      fontSize: "1.1rem",
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal dialog with scrim, squared surface, and header/footer slots. */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "rgba(23, 49, 93, 0.42)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      background: "var(--color-surface)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      padding: "1.25rem 1.5rem 0.75rem"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontSize: "1.25rem",
      fontWeight: "var(--fw-semibold)",
      color: "var(--color-text)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Fermer",
    onClick: onClose,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--color-text-muted)",
      fontSize: "1.35rem",
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0.25rem 1.5rem 1.25rem",
      fontFamily: "var(--font-body)",
      color: "var(--color-text-body)",
      fontSize: "0.9375rem",
      lineHeight: "var(--lh-normal)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "0.6rem",
      padding: "0.9rem 1.5rem",
      borderTop: "1px solid var(--color-divider)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hover/focus tooltip. Wraps a trigger; shows `label` on top. */
function Tooltip({
  label,
  placement = "top",
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 100,
      whiteSpace: "nowrap",
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      fontFamily: "var(--font-body)",
      fontSize: "0.75rem",
      lineHeight: 1.3,
      padding: "0.35rem 0.6rem",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square checkbox in the brand blue. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.55rem",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--color-text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      width: 18,
      height: 18,
      margin: 0,
      cursor: "inherit",
      accentColor: "var(--color-primary)"
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Field wrapper: label, optional hint, error text, required marker. */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.35rem",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "0.8125rem",
      color: "var(--color-text)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-accent)",
      marginLeft: 2
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      color: "var(--color-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.75rem",
      color: "var(--color-text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with a filet border and brand focus ring. */
function Input({
  size = "md",
  invalid = false,
  disabled = false,
  iconLeft = null,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = {
    sm: "0.4rem 0.6rem",
    md: "0.55rem 0.75rem",
    lg: "0.7rem 0.9rem"
  }[size];
  const fs = {
    sm: "0.8125rem",
    md: "0.9375rem",
    lg: "1.0625rem"
  }[size];
  const borderColor = invalid ? "var(--color-danger)" : focus ? "var(--color-focus)" : "var(--color-border-strong)";
  const wrap = /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      width: "100%"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "0.65rem",
      display: "flex",
      color: "var(--color-text-muted)",
      pointerEvents: "none"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      fontFamily: "var(--font-body)",
      fontSize: fs,
      color: "var(--color-text-body)",
      background: disabled ? "var(--color-bg-subtle)" : "var(--color-surface)",
      padding: pad,
      paddingLeft: iconLeft ? "2.1rem" : undefined,
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus && !invalid ? "var(--shadow-focus)" : "none",
      opacity: disabled ? 0.6 : 1,
      transition: "border-color .16s ease, box-shadow .16s ease",
      ...style
    }
  }, rest)));
  return wrap;
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio option in the brand blue. Group with a shared `name`. */
function Radio({
  label,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.55rem",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--color-text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      width: 18,
      height: 18,
      margin: 0,
      cursor: "inherit",
      accentColor: "var(--color-primary)"
    }
  }, rest)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled with the brand filet + chevron. */
function Select({
  children,
  invalid = false,
  disabled = false,
  size = "md",
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = {
    sm: "0.4rem 2rem 0.4rem 0.6rem",
    md: "0.55rem 2.2rem 0.55rem 0.75rem",
    lg: "0.7rem 2.4rem 0.7rem 0.9rem"
  }[size];
  const fs = {
    sm: "0.8125rem",
    md: "0.9375rem",
    lg: "1.0625rem"
  }[size];
  const borderColor = invalid ? "var(--color-danger)" : focus ? "var(--color-focus)" : "var(--color-border-strong)";
  const chevron = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2317315d' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>`);
  return /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      appearance: "none",
      WebkitAppearance: "none",
      fontFamily: "var(--font-body)",
      fontSize: fs,
      color: "var(--color-text-body)",
      background: `${disabled ? "var(--color-bg-subtle)" : "var(--color-surface)"} url("${chevron}") no-repeat right 0.75rem center`,
      padding: pad,
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus && !invalid ? "var(--shadow-focus)" : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      transition: "border-color .16s ease, box-shadow .16s ease",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch. Controlled via `checked` + `onChange`. */
function Switch({
  checked = false,
  disabled = false,
  onChange,
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.55 : 1,
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      color: "var(--color-text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 42,
      height: 24,
      flexShrink: 0,
      padding: 2,
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: "inherit",
      background: checked ? "var(--color-primary)" : "var(--color-border-strong)",
      display: "flex",
      alignItems: "center",
      justifyContent: checked ? "flex-end" : "flex-start",
      transition: "background .18s ease"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "var(--color-surface)",
      boxShadow: "var(--shadow-xs)",
      transition: "transform .18s ease"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input matching Input styling. */
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--color-danger)" : focus ? "var(--color-focus)" : "var(--color-border-strong)";
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      resize: "vertical",
      fontFamily: "var(--font-body)",
      fontSize: "0.9375rem",
      lineHeight: "var(--lh-normal)",
      color: "var(--color-text-body)",
      background: disabled ? "var(--color-bg-subtle)" : "var(--color-surface)",
      padding: "0.6rem 0.75rem",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--radius-sm)",
      outline: "none",
      boxShadow: focus && !invalid ? "var(--shadow-focus)" : "none",
      transition: "border-color .16s ease, box-shadow .16s ease",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface card. Elegant, restrained. Variants:
 *  - "surface" (white, soft shadow)
 *  - "filet" (white with fine brand-ish border, no shadow — echoes graphic markers)
 *  - "sand" (warm sable fill, flat)
 */
function Card({
  variant = "surface",
  padding = "var(--space-4)",
  interactive = false,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    surface: {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      boxShadow: "var(--shadow-sm)"
    },
    filet: {
      background: "var(--color-surface)",
      border: "1.5px solid var(--color-border-strong)",
      boxShadow: "none"
    },
    sand: {
      background: "var(--color-surface-sand)",
      border: "1px solid transparent",
      boxShadow: "none"
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: "var(--radius-md)",
      padding,
      boxSizing: "border-box",
      transition: "box-shadow .18s ease, transform .18s ease",
      ...variants[variant],
      ...(interactive && hover ? {
        boxShadow: "var(--shadow-md)",
        transform: "translateY(-2px)",
        cursor: "pointer"
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
/** Thin divider. Horizontal by default; `vertical` for inline separators. Optional centered label. */
function Divider({
  vertical = false,
  label,
  style = {}
}) {
  if (vertical) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: "var(--color-divider)",
        ...style
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.9rem",
        color: "var(--color-text-muted)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--color-divider)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "0.6875rem",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "0.08em",
        textTransform: "uppercase"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--color-divider)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: "none",
      borderTop: "1px solid var(--color-divider)",
      margin: 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/SquareMarker.jsx
try { (() => {
/**
 * SquareMarker — the brand's foundational graphic marker, derived from the square logotype.
 * Wraps content in a square-proportioned frame. Styles:
 *  - "solid" (filled blue block)
 *  - "filet" (outlined square)
 *  - "polaroid" (white square with a heavier bottom border — the "Polaroïd" marker)
 */
function SquareMarker({
  variant = "filet",
  color = "var(--color-primary)",
  size = 120,
  children,
  style = {}
}) {
  const base = {
    width: size,
    height: size,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  };
  const variants = {
    solid: {
      background: color,
      color: "var(--color-on-primary)"
    },
    filet: {
      background: "transparent",
      border: `1.5px solid ${color}`,
      color
    },
    polaroid: {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderBottomWidth: Math.round(size * 0.16),
      borderBottomColor: color,
      boxShadow: "var(--shadow-sm)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SquareMarker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SquareMarker.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Breadcrumb trail. Items: { label, href? }. Last item is the current page. */
function Breadcrumb({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Fil d'Ariane",
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "0.4rem",
      fontFamily: "var(--font-body)",
      fontSize: "0.8125rem",
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? "var(--color-text)" : "var(--color-text-muted)",
        fontWeight: last ? "var(--fw-semibold)" : "var(--fw-regular)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: "var(--color-text-muted)",
        textDecoration: "none"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--color-border-strong)"
      }
    }, "/"));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs. Controlled or uncontrolled. Active tab underlined in brand blue. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = value ?? internal;
  const select = id => {
    setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.25rem",
      borderBottom: "1px solid var(--color-divider)",
      ...style
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => select(t.id),
      style: {
        border: "none",
        background: "none",
        cursor: "pointer",
        fontFamily: "var(--font-heading)",
        fontSize: "0.9375rem",
        fontWeight: on ? "var(--fw-semibold)" : "var(--fw-regular)",
        color: on ? "var(--color-primary)" : "var(--color-text-muted)",
        padding: "0.6rem 0.9rem",
        position: "relative",
        marginBottom: -1,
        borderBottom: `2px solid ${on ? "var(--color-primary)" : "transparent"}`,
        transition: "color .16s ease"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client-portal/DashboardScreen.jsx
try { (() => {
// Dashboard — "Mes projets"
const {
  Card,
  Badge,
  Button,
  SquareMarker
} = window.GroupeGiboireDesignSystem_a13d4b;
function ProgressBar({
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "var(--gib-ivory)",
      borderRadius: 999,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: value + "%",
      height: "100%",
      background: value === 100 ? "var(--color-success)" : "var(--color-primary)"
    }
  }));
}
function ProjectCard({
  p,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "surface",
    padding: "0",
    interactive: true,
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 116,
      background: p.cover,
      position: "relative",
      display: "flex",
      alignItems: "flex-end",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.statusTone,
    solid: true
  }, p.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      border: "1.5px solid rgba(255,255,255,0.5)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "gib-overline",
    style: {
      marginBottom: 4
    }
  }, p.city, " \xB7 ", p.type), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 20
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--color-text-muted)",
      marginTop: 3
    }
  }, p.lot)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12.5,
      color: "var(--color-text-muted)",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Avancement"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text)",
      fontWeight: 600
    }
  }, p.progress, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: p.progress
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "auto",
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--color-text-body)"
    }
  }, p.delivery), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => onOpen(p.id)
  }, "Ouvrir"))));
}
function DashboardScreen({
  data,
  onOpen
}) {
  const p = data.projects[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gib-overline",
    style: {
      marginBottom: 8
    }
  }, "Bonjour ", data.user.name.split(" ")[0]), /*#__PURE__*/React.createElement("div", {
    className: "gib-display",
    style: {
      fontSize: 36,
      marginBottom: 8
    }
  }, "Vos projets prennent ", /*#__PURE__*/React.createElement("em", null, "forme"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-text-body)",
      maxWidth: 460,
      margin: 0
    }
  }, "Suivez l'avancement, retrouvez vos documents et \xE9changez avec ", data.user.advisor, " \xE0 chaque \xE9tape.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "filet",
    padding: "16px 20px",
    style: {
      minWidth: 128,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 40,
      color: "var(--color-primary)",
      lineHeight: 1
    }
  }, data.projects.length), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--color-text-muted)",
      marginTop: 4
    }
  }, "Projets suivis")), /*#__PURE__*/React.createElement(Card, {
    variant: "filet",
    padding: "16px 20px",
    style: {
      minWidth: 128,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 40,
      color: "var(--color-accent)",
      lineHeight: 1
    }
  }, "2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--color-text-muted)",
      marginTop: 4
    }
  }, "Actions requises")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 20
    }
  }, "Mes projets"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13.5
    }
  }, "Historique complet")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18
    }
  }, data.projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    p: p,
    onOpen: onOpen
  })))));
}
Object.assign(window, {
  DashboardScreen,
  ProjectCard,
  ProgressBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client-portal/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client-portal/LoginScreen.jsx
try { (() => {
// Login screen — Espace Client Giboire
const {
  Button,
  Input,
  Field,
  Checkbox,
  Logo
} = window.GroupeGiboireDesignSystem_a13d4b;
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 46%",
      background: "var(--gib-blue-900)",
      color: "#fff",
      padding: "56px 56px 44px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo/giboire-logo-liseret.png",
    size: 72
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontSize: 46,
      lineHeight: 1.06,
      letterSpacing: "-0.02em"
    }
  }, "Vos r\xEAves prennent ", /*#__PURE__*/React.createElement("em", null, "vie"), " ici."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      maxWidth: 380,
      color: "rgba(255,255,255,0.78)",
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "Votre espace personnel pour suivre votre projet, retrouver vos documents et \xE9changer avec votre conseiller \u2014 \xE0 chaque \xE9tape.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      border: "1.5px solid rgba(255,255,255,0.25)",
      position: "absolute",
      right: 40,
      bottom: 40
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 54%",
      background: "var(--color-surface)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "gib-overline",
    style: {
      marginBottom: 10
    }
  }, "Espace client"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 6px",
      fontSize: 28
    }
  }, "Bienvenue"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-text-muted)",
      marginBottom: 28,
      fontSize: 15
    }
  }, "Connectez-vous pour acc\xE9der \xE0 vos projets."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Adresse e-mail",
    htmlFor: "email"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    defaultValue: "camille.lefevre@exemple.fr"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Mot de passe",
    htmlFor: "pwd"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pwd",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Se souvenir de moi",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13
    }
  }, "Mot de passe oubli\xE9 ?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true
  }, "Acc\xE9der \xE0 mon espace")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 13,
      color: "var(--color-text-muted)",
      textAlign: "center"
    }
  }, "Besoin d'aide ? Votre conseiller vous accompagne au ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--color-text)"
    }
  }, "02 99 00 00 00"), "."))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client-portal/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client-portal/ProjectScreen.jsx
try { (() => {
// Project detail — timeline, documents, messages
const {
  Card,
  Badge,
  Button,
  Tabs,
  Breadcrumb,
  Alert,
  Input,
  Divider
} = window.GroupeGiboireDesignSystem_a13d4b;
function Timeline({
  steps
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, steps.map((s, i) => {
    const last = i === steps.length - 1;
    const color = s.done ? "var(--color-primary)" : s.current ? "var(--color-accent)" : "var(--color-border-strong)";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 16,
        height: 16,
        background: s.done || s.current ? color : "var(--color-surface)",
        border: `2px solid ${color}`,
        borderRadius: 2
      }
    }), !last && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 2,
        flex: 1,
        minHeight: 30,
        background: s.done ? "var(--color-primary)" : "var(--color-divider)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: last ? 0 : 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: s.current ? 600 : 400,
        fontSize: 15,
        color: s.done || s.current ? "var(--color-text)" : "var(--color-text-muted)"
      }
    }, s.label), s.current && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--color-accent)",
        marginTop: 2
      }
    }, "En cours")));
  }));
}
function DocRow({
  d
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 4px",
      borderBottom: "1px solid var(--color-divider)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      background: "var(--gib-ivory)",
      borderRadius: "var(--radius-sm)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-primary)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "file-text",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--color-text)"
    }
  }, d.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--color-text-muted)"
    }
  }, d.size, " \xB7 ", d.date)), d.tone === "warning" && /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "Action requise"), /*#__PURE__*/React.createElement("button", {
    "aria-label": "T\xE9l\xE9charger",
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--color-text-muted)",
      padding: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "download",
    style: {
      width: 18,
      height: 18
    }
  })));
}
function MessageThread({
  messages
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, messages.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      flexDirection: m.me ? "row-reverse" : "row"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      flexShrink: 0,
      borderRadius: "var(--radius-sm)",
      background: m.me ? "var(--gib-sand)" : "var(--color-primary)",
      color: m.me ? "var(--color-primary)" : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 13
    }
  }, m.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "baseline",
      justifyContent: m.me ? "flex-end" : "flex-start",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--color-text)"
    }
  }, m.from), m.role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--color-accent)"
    }
  }, m.role), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--color-text-muted)"
    }
  }, m.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: m.me ? "var(--color-primary)" : "var(--color-surface)",
      color: m.me ? "#fff" : "var(--color-text-body)",
      border: m.me ? "none" : "1px solid var(--color-border)",
      padding: "12px 14px",
      borderRadius: "var(--radius-md)",
      fontSize: 14,
      lineHeight: 1.55
    }
  }, m.text)))));
}
function ProjectScreen({
  data,
  project,
  onBack
}) {
  const [tab, setTab] = React.useState("suivi");
  const p = project;
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Mes projets",
      href: "#"
    }, {
      label: p.name
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "gib-overline",
    style: {
      marginBottom: 6
    }
  }, p.city, " \xB7 ", p.type), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 30
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: "var(--color-text-muted)",
      marginTop: 4
    }
  }, p.lot, " \xB7 ", p.price)), /*#__PURE__*/React.createElement(Badge, {
    tone: p.statusTone,
    solid: true
  }, p.status)), p.docs.some(d => d.tone === "warning") && /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Un appel de fonds vous attend"
  }, "L'appel de fonds \xAB fondations \xBB est disponible dans vos documents. Votre conseiller reste \xE0 votre \xE9coute."), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: "suivi",
      label: "Suivi du chantier"
    }, {
      id: "docs",
      label: "Documents"
    }, {
      id: "messages",
      label: "Messages"
    }]
  }), tab === "suivi" && /*#__PURE__*/React.createElement(Card, {
    variant: "surface"
  }, p.steps.length ? /*#__PURE__*/React.createElement(Timeline, {
    steps: p.steps
  }) : /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-text-muted)"
    }
  }, "Projet livr\xE9. Retrouvez le proc\xE8s-verbal dans vos documents.")), tab === "docs" && /*#__PURE__*/React.createElement(Card, {
    variant: "surface",
    padding: "8px 20px"
  }, p.docs.map((d, i) => /*#__PURE__*/React.createElement(DocRow, {
    key: i,
    d: d
  }))), tab === "messages" && /*#__PURE__*/React.createElement(Card, {
    variant: "surface"
  }, /*#__PURE__*/React.createElement(MessageThread, {
    messages: data.messages
  }), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: "18px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\xC9crire \xE0 votre conseiller\u2026",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, null, "Envoyer"))));
}
Object.assign(window, {
  ProjectScreen,
  Timeline,
  DocRow,
  MessageThread
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client-portal/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client-portal/Shell.jsx
try { (() => {
// App shell — sidebar + topbar for the Espace Client
const {
  Logo,
  IconButton,
  Badge
} = window.GroupeGiboireDesignSystem_a13d4b;
function NavItem({
  icon,
  label,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      textAlign: "left",
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--radius-sm)",
      padding: "10px 12px",
      fontFamily: "var(--font-heading)",
      fontSize: 14.5,
      fontWeight: active ? 600 : 400,
      color: active ? "#fff" : hover ? "#fff" : "rgba(255,255,255,0.72)",
      background: active ? "rgba(255,255,255,0.12)" : hover ? "rgba(255,255,255,0.06)" : "transparent",
      transition: "background .16s ease, color .16s ease"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 18,
      height: 18
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}
function Shell({
  nav,
  current,
  onNav,
  user,
  children
}) {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      fontFamily: "var(--font-body)",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      background: "var(--gib-blue-900)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      padding: "24px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 8px 24px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo/giboire-logo-liseret.png",
    size: 52
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, nav.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    icon: n.icon,
    label: n.label,
    active: current === n.id,
    onClick: () => onNav(n.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "16px 8px 0",
      borderTop: "1px solid rgba(255,255,255,0.14)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "rgba(255,255,255,0.6)",
      lineHeight: 1.5
    }
  }, "Votre conseiller"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 14
    }
  }, user.advisor))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 68,
      flexShrink: 0,
      background: "var(--color-surface)",
      borderBottom: "1px solid var(--color-divider)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 17,
      color: "var(--color-text)"
    }
  }, nav.find(n => n.id === current)?.label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Notifications",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-sm)",
      background: "var(--gib-sand)",
      color: "var(--color-primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 14
    }
  }, user.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 13.5,
      color: "var(--color-text)"
    }
  }, user.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--color-text-muted)"
    }
  }, "Client"))))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: "auto",
      padding: "28px"
    }
  }, children)));
}
Object.assign(window, {
  Shell,
  NavItem
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client-portal/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client-portal/data.js
try { (() => {
// Fake data for the Espace Client Giboire portal
window.GIB_DATA = {
  user: {
    name: "Camille Lefèvre",
    initials: "CL",
    email: "camille.lefevre@exemple.fr",
    advisor: "Julien Marchand"
  },
  projects: [{
    id: "jardins-alix",
    name: "Les Jardins d'Alix",
    city: "Rennes",
    type: "Appartement neuf",
    lot: "Lot B12 · T3 · 67 m²",
    status: "En cours",
    statusTone: "brand",
    progress: 62,
    delivery: "2ᵉ trimestre 2027",
    price: "312 000 €",
    cover: "var(--gib-blue-700)",
    steps: [{
      label: "Réservation signée",
      done: true
    }, {
      label: "Financement validé",
      done: true
    }, {
      label: "Acte de vente",
      done: true
    }, {
      label: "Fondations",
      done: true
    }, {
      label: "Gros œuvre",
      done: false,
      current: true
    }, {
      label: "Livraison",
      done: false
    }],
    docs: [{
      name: "Contrat de réservation.pdf",
      size: "1,2 Mo",
      date: "12 mars 2026",
      tone: "brand"
    }, {
      name: "Plan du lot B12.pdf",
      size: "3,8 Mo",
      date: "12 mars 2026",
      tone: "neutral"
    }, {
      name: "Notice descriptive.pdf",
      size: "2,1 Mo",
      date: "18 mars 2026",
      tone: "neutral"
    }, {
      name: "Appel de fonds — fondations.pdf",
      size: "480 Ko",
      date: "02 juin 2026",
      tone: "warning"
    }]
  }, {
    id: "carre-thabor",
    name: "Le Carré Thabor",
    city: "Rennes",
    type: "Appartement neuf",
    lot: "Lot A04 · T2 · 44 m²",
    status: "Livré",
    statusTone: "success",
    progress: 100,
    delivery: "Livré en janvier 2026",
    price: "248 000 €",
    cover: "var(--gib-olive)",
    steps: [],
    docs: [{
      name: "Procès-verbal de livraison.pdf",
      size: "900 Ko",
      date: "22 janv. 2026",
      tone: "success"
    }]
  }],
  messages: [{
    from: "Julien Marchand",
    role: "Votre conseiller",
    initials: "JM",
    time: "Hier · 16 : 40",
    text: "Bonjour Camille, les travaux de gros œuvre des Jardins d'Alix ont bien démarré. Je vous tiens informée à chaque étape.",
    me: false
  }, {
    from: "Camille Lefèvre",
    role: "",
    initials: "CL",
    time: "Hier · 17 : 05",
    text: "Merci Julien. Aurai-je accès aux photos du chantier ?",
    me: true
  }, {
    from: "Julien Marchand",
    role: "Votre conseiller",
    initials: "JM",
    time: "Aujourd'hui · 09 : 12",
    text: "Bien sûr — je les déposerai dans vos documents chaque fin de mois. À votre écoute pour toute question.",
    me: false
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client-portal/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.SquareMarker = __ds_scope.SquareMarker;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
