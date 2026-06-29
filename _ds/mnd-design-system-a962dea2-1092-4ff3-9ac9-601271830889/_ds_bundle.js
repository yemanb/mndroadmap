/* @ds-bundle: {"format":3,"namespace":"MNDDesignSystem_a962de","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Filet","sourcePath":"components/core/Filet.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Seal","sourcePath":"components/core/Seal.jsx"},{"name":"Stars","sourcePath":"components/core/Stars.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"516dbaa9a0a0","components/core/Button.jsx":"f7ed5b03dd1a","components/core/Card.jsx":"34570a6a05cc","components/core/Eyebrow.jsx":"c53d96a9effd","components/core/Filet.jsx":"76f572427c5b","components/core/Input.jsx":"131ed8ee46ce","components/core/Seal.jsx":"68d90f179367","components/core/Stars.jsx":"a5bc050ba888","components/core/Stat.jsx":"91f15b8104bf","ui_kits/app/App.jsx":"b7f5b8038fa2","ui_kits/crm/Crm.jsx":"13c6782cb27a","ui_kits/deck/deck-stage.js":"0cc26af2402a","ui_kits/erp/Erp.jsx":"6c8623ca1039","ui_kits/lokaa/ClientApp.jsx":"7e8d9be07c2c","ui_kits/lokaa/ScreensA.jsx":"d75bd2996431","ui_kits/lokaa/ScreensB.jsx":"22141920b421","ui_kits/lokaa/ScreensC.jsx":"bde25223a2e6","ui_kits/lokaa/ScreensD.jsx":"e8c05a39f444","ui_kits/lokaa/ScreensE.jsx":"2d7a7d521af6","ui_kits/lokaa/ScreensF.jsx":"6ad3e180fed0","ui_kits/lokaa/ScreensG.jsx":"ae7eee011e10","ui_kits/lokaa/ScreensH.jsx":"92df2ac76c77","ui_kits/lokaa/ScreensI.jsx":"e6b4252e7c6f","ui_kits/lokaa/ScreensJ.jsx":"4d55c7c71439","ui_kits/lokaa/ScreensK.jsx":"ac0347b5d320","ui_kits/lokaa/ScreensL.jsx":"612d91444da4","ui_kits/lokaa/ScreensM.jsx":"328970047a7d","ui_kits/lokaa/lokaa-data.js":"190fe9ac5551","ui_kits/quiz/personas.js":"0a437732b378","ui_kits/social/Social.jsx":"9169490cad5e","ui_kits/web/Booking.jsx":"d08397585b2a","ui_kits/web/Boutique.jsx":"654e1beb57f6","ui_kits/web/Chrome.jsx":"0620ec621e47","ui_kits/web/Hero.jsx":"f26c3adcf55a","ui_kits/web/Maison.jsx":"0c8b7d40bae6","ui_kits/web/ProductPage.jsx":"dfb71f8f7bc1","ui_kits/web/data.js":"86b28aad9e92"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MNDDesignSystem_a962de = window.MNDDesignSystem_a962de || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MND — Badge · petite étiquette d'état ou d'édition.
 * Capsule cerclée (radius pill) ou cartouche carré ; tons sobres.
 */
function Badge({
  children,
  tone = 'indigo',
  shape = 'pill',
  size = 'md',
  style = {},
  ...rest
}) {
  const tones = {
    indigo: {
      background: 'var(--indigo-50)',
      color: 'var(--color-indigo)',
      border: '1px solid var(--indigo-100)'
    },
    copper: {
      background: 'var(--copper-50)',
      color: 'var(--copper-700)',
      border: '1px solid var(--copper-100)'
    },
    obsidian: {
      background: 'var(--color-obsidian)',
      color: 'var(--color-ivoire)',
      border: '1px solid var(--color-obsidian)'
    },
    solid: {
      background: 'var(--color-indigo)',
      color: 'var(--color-ivoire)',
      border: '1px solid var(--color-indigo)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-indigo)',
      border: '1px solid var(--hairline)'
    }
  };
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: 10,
      letterSpacing: '0.16em'
    },
    md: {
      padding: '5px 12px',
      fontSize: 11,
      letterSpacing: '0.18em'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      ...sizes[size],
      ...tones[tone],
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
 * MND — Button · « le geste juste »
 * Capitales Jost largement espacées, coins quasi droits, états sobres.
 * Variants: primary (indigo) · secondary (filet indigo) · ghost · copper.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '9px 18px',
      fontSize: 11,
      letterSpacing: '0.18em'
    },
    md: {
      padding: '13px 26px',
      fontSize: 12,
      letterSpacing: '0.2em'
    },
    lg: {
      padding: '17px 36px',
      fontSize: 13,
      letterSpacing: '0.22em'
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-indigo)',
      color: 'var(--color-ivoire)',
      border: '1px solid var(--color-indigo)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-indigo)',
      border: '1px solid var(--color-indigo)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-indigo)',
      border: '1px solid transparent'
    },
    copper: {
      background: 'var(--color-copper)',
      color: 'var(--color-ivoire)',
      border: '1px solid var(--color-copper)'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = hover && !disabled ? variant === 'primary' ? {
    background: 'var(--indigo-700)',
    borderColor: 'var(--indigo-700)'
  } : variant === 'copper' ? {
    background: 'var(--copper-600)',
    borderColor: 'var(--copper-600)'
  } : {
    background: 'var(--hover-veil)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      transform: press && !disabled ? 'translateY(0.5px)' : 'none',
      transition: 'background var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
      ...sizes[size],
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MND — Card · panneau ivoire plat.
 * Coins quasi droits, ombre douce et diffuse, filet cuivre haut optionnel.
 * Variants de surface : paper, deep (indigo), obsidian.
 */
function Card({
  children,
  surface = 'paper',
  topFilet = false,
  hairline = true,
  padding = 28,
  elevation = 'sm',
  hover = false,
  style = {},
  ...rest
}) {
  const [isHover, setHover] = React.useState(false);
  const surfaces = {
    paper: {
      background: 'var(--surface-card)',
      color: 'var(--ink)'
    },
    deep: {
      background: 'var(--color-indigo)',
      color: 'var(--color-ivoire)'
    },
    obsidian: {
      background: 'var(--color-obsidian)',
      color: 'var(--color-ivoire)'
    },
    sable: {
      background: 'var(--color-sable)',
      color: 'var(--ink)'
    }
  };
  const shadows = {
    none: 'none',
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const isDeep = surface === 'deep' || surface === 'obsidian';
  const border = hairline ? `1px solid ${isDeep ? 'var(--hairline-invert)' : 'var(--hairline)'}` : '1px solid transparent';
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-md)',
      border,
      padding,
      boxShadow: hover && isHover ? 'var(--shadow-lg)' : shadows[elevation],
      transform: hover && isHover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-soft), transform var(--dur-base) var(--ease-soft)',
      overflow: 'hidden',
      ...surfaces[surface],
      ...style
    }
  }, rest), topFilet && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: 'var(--color-copper)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MND — Eyebrow · le label CAPS au-dessus des titres.
 * Jost Medium, letter-spacing .26em, cuivre par défaut. Filet optionnel.
 */
function Eyebrow({
  children,
  color = 'var(--accent)',
  withRule = false,
  align = 'left',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), withRule && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 28,
      height: 2,
      background: 'var(--color-copper)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Filet.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MND — Filet · le système de séparation.
 * Filet cuivre 2px (accent) ou indigo 1px (hiérarchie).
 * Orientation horizontale ou verticale ; option « ornement » avec point central.
 */
function Filet({
  variant = 'indigo',
  orientation = 'horizontal',
  ornament = false,
  length = '100%',
  color,
  style = {},
  ...rest
}) {
  const stroke = color || (variant === 'copper' ? 'var(--color-copper)' : 'var(--color-indigo)');
  const weight = variant === 'copper' ? 2 : 1;
  if (ornament) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: orientation === 'horizontal' ? length : 'auto',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: weight,
        background: stroke
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        transform: 'rotate(45deg)',
        background: stroke,
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: weight,
        background: stroke
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    style: orientation === 'horizontal' ? {
      width: length,
      height: weight,
      background: stroke,
      ...style
    } : {
      height: length,
      width: weight,
      background: stroke,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Filet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Filet.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MND — Input · champ de saisie sobre.
 * Filet indigo en base, anneau cuivre au focus, label CAPS espacé.
 */
function Input({
  label = null,
  hint = null,
  type = 'text',
  invert = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const ink = invert ? 'var(--color-ivoire)' : 'var(--color-obsidian)';
  const line = invert ? 'var(--hairline-invert)' : 'var(--hairline)';
  const placeholderColor = invert ? 'var(--indigo-200)' : 'var(--obsidian-300)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: invert ? 'var(--color-copper)' : 'var(--accent)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      background: 'transparent',
      border: 'none',
      borderBottom: `1px solid ${focus ? 'var(--color-copper)' : line}`,
      padding: '10px 2px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 15,
      color: ink,
      outline: 'none',
      boxShadow: focus ? '0 1px 0 0 var(--color-copper)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      '--ph': placeholderColor
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12,
      color: invert ? 'var(--indigo-200)' : 'var(--ink-soft)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Seal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MND — Le Sceau · monogramme cerclé.
 * Tampon / cire / sticker / photo de profil. Anneau cuivre, fond profond.
 * Passez `src` (un PNG monogramme depuis assets/monograms/) ou laissez le
 * repli textuel « MND ».
 */
function Seal({
  src = null,
  alt = 'MND',
  size = 96,
  tone = 'obsidian',
  ring = 'copper',
  style = {},
  ...rest
}) {
  const grounds = {
    obsidian: 'var(--color-obsidian)',
    indigo: 'var(--color-indigo)',
    ivoire: 'var(--color-ivoire)'
  };
  const rings = {
    copper: 'var(--color-copper)',
    indigo: 'var(--color-indigo)',
    ivoire: 'var(--color-ivoire)'
  };
  const fallbackColor = tone === 'ivoire' ? 'var(--color-indigo)' : 'var(--color-ivoire)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: grounds[tone] || tone,
      border: `${Math.max(1, Math.round(size * 0.018))}px solid ${rings[ring] || ring}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '54%',
      height: '54%',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: size * 0.22,
      letterSpacing: '0.22em',
      textIndent: '0.22em',
      color: fallbackColor
    }
  }, "MND"));
}
Object.assign(__ds_scope, { Seal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Seal.jsx", error: String((e && e.message) || e) }); }

// components/core/Stars.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MND — Stars · la notation cuivre des témoignages.
 * Cinq étoiles cuivre, terminaisons sobres. Supporte les demi-valeurs.
 */
function Stars({
  value = 5,
  max = 5,
  size = 16,
  color = 'var(--color-copper)',
  gap = 4,
  style = {},
  ...rest
}) {
  const items = [];
  for (let i = 1; i <= max; i++) {
    const fill = value >= i ? 1 : value >= i - 0.5 ? 0.5 : 0;
    items.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'relative',
        width: size,
        height: size,
        display: 'inline-block',
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        color: 'var(--copper-200)'
      }
    }, star(size)), fill > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        color,
        overflow: 'hidden',
        width: fill === 0.5 ? size / 2 : size
      }
    }, star(size))));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "img",
    "aria-label": `${value} sur ${max}`,
    style: {
      display: 'inline-flex',
      gap,
      ...style
    }
  }, rest), items);
}
function star(size) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.4l2.7 6.06 6.6.57-5 4.35 1.5 6.45L12 16.9 6.2 20.28l1.5-6.45-5-4.35 6.6-.57z"
  }));
}
Object.assign(__ds_scope, { Stars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stars.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MND — Stat · le chiffre serif souverain.
 * Grand nombre Cormorant Light + label Jost CAPS. Filet cuivre optionnel.
 */
function Stat({
  value,
  label,
  sub = null,
  align = 'left',
  invert = false,
  withRule = true,
  style = {},
  ...rest
}) {
  const ink = invert ? 'var(--color-ivoire)' : 'var(--color-indigo)';
  const soft = invert ? 'var(--indigo-200)' : 'var(--ink-soft)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      gap: 8,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 'clamp(46px, 5vw, 68px)',
      lineHeight: 0.95,
      letterSpacing: '-0.01em',
      color: ink
    }
  }, value), withRule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 2,
      background: 'var(--color-copper)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: invert ? 'var(--color-copper)' : 'var(--accent)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13,
      color: soft,
      maxWidth: 220
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/App.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Filet,
  Stars,
  Seal,
  Eyebrow
} = window.MNDDesignSystem_a962de;
const FCFA = window.MND.FCFA;

/* ===== MND — Espace client "Ma Couronne" =====
   Le héros est le client. MND est le guide. */

const ME = {
  prenom: 'Adjoa',
  profil: 'Microlocks',
  depuis: 'Mars 2024',
  jour: 472,
  niveau: 'Couronne d’argent',
  progress: 0.68
};
const TABS = [{
  id: 'accueil',
  label: 'Accueil',
  g: '♛'
}, {
  id: 'parcours',
  label: 'Parcours',
  g: '◷'
}, {
  id: 'rituel',
  label: 'Rituel',
  g: '⬡'
}, {
  id: 'commu',
  label: 'Cercle',
  g: '✦'
}];
function Phone({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 392,
      margin: '0 auto',
      borderRadius: 40,
      border: '10px solid #14141B',
      background: '#14141B',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 22px',
      background: 'var(--color-obsidian)',
      color: 'var(--color-ivoire)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: '0.1em'
    }
  }, "Ma Couronne"), /*#__PURE__*/React.createElement("span", null, "\u25AA\u25AA\u25AA")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 720,
      overflowY: 'auto',
      background: 'var(--paper)',
      position: 'relative'
    }
  }, children));
}
function Hdr({
  sub,
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, sub), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 32,
      color: 'var(--color-indigo)',
      margin: '6px 0 0',
      letterSpacing: '-0.01em'
    }
  }, title));
}

/* ---- Accueil : le client est le héros ---- */
function Accueil({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 300,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/model-microlocks.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 22%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, var(--color-obsidian) 4%, rgba(20,20,27,0.15) 55%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/monograms/mono-ivoire.png",
    alt: "",
    style: {
      position: 'absolute',
      top: 18,
      right: 20,
      width: 30,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 22,
      right: 22,
      bottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Votre couronne"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 40,
      color: 'var(--color-ivoire)',
      lineHeight: 1,
      marginTop: 6
    }
  }, "Bonjour, ", ME.prenom, "."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      padding: '14px 16px',
      background: 'var(--color-sable)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 22,
      color: 'var(--color-copper)',
      lineHeight: 1
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--ink)'
    }
  }, "Vous \xEAtes l\u2019h\xE9ro\xEFne de cette transformation. MND n\u2019est que votre guide \u2014 depuis plus de 20 ans, m\xE8che apr\xE8s m\xE8che.")), /*#__PURE__*/React.createElement(Card, {
    padding: 18,
    style: {
      marginTop: 16
    },
    topFilet: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-indigo)'
    }
  }, ME.profil), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, "Jour ", ME.jour, " \xB7 depuis ", ME.depuis)), /*#__PURE__*/React.createElement(Badge, {
    tone: "copper",
    size: "sm"
  }, ME.niveau)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: 'var(--hairline)',
      borderRadius: 3,
      marginTop: 14,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: ME.progress * 100 + '%',
      height: '100%',
      background: 'var(--color-copper)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)',
      marginTop: 8
    }
  }, "Prochain palier : Couronne d\u2019or \xB7 6 soins")), /*#__PURE__*/React.createElement(Card, {
    surface: "deep",
    padding: 18,
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Prochain rendez-vous"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-ivoire)'
    }
  }, "Resserrage racines"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--indigo-100)',
      marginTop: 2
    }
  }, "Sam. 5 juil \xB7 10:00 \xB7 avec Y\xE9man"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "copper"
  }, "Confirmer"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    style: {
      color: 'var(--color-ivoire)',
      borderColor: 'var(--hairline-invert)'
    }
  }, "Replanifier"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      margin: '22px 0 10px'
    }
  }, "L\u2019univers MND"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, [{
    t: 'Ma boutique',
    s: 'Renouveler mon rituel',
    go: 'rituel'
  }, {
    t: 'Mes cours',
    s: 'Académie · niveau I',
    go: 'commu'
  }, {
    t: 'RACINES',
    s: 'Le cercle & le podcast',
    go: 'commu'
  }, {
    t: 'Le Couronnement',
    s: 'Invitation · Cotonou',
    go: 'commu'
  }].map(q => /*#__PURE__*/React.createElement("button", {
    key: q.t,
    onClick: () => go(q.go),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      background: 'var(--color-ivoire)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, q.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, q.s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 20
    }
  })));
}

/* ---- Parcours : sa transformation ---- */
function Parcours() {
  const steps = [{
    d: 'Mars 2024',
    t: 'Le démarrage',
    s: 'Création des microlocks · avec Brice',
    img: 'portrait-3.jpg',
    done: true
  }, {
    d: 'Juil 2024',
    t: 'Premier resserrage',
    s: 'Racines reprises, cuir chevelu sain',
    done: true
  }, {
    d: 'Déc 2024',
    t: 'Le Couronnement',
    s: 'Première édition · tapis cuivre',
    done: true
  }, {
    d: 'Mars 2025',
    t: 'Un an de couronne',
    s: 'Soin profond rituel offert',
    img: 'model-microlocks.jpg',
    done: true
  }, {
    d: 'Juil 2025',
    t: 'Resserrage à venir',
    s: 'Samedi 5 juillet · 10:00',
    done: false
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hdr, {
    sub: "Votre transformation",
    title: "Le parcours."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      aspectRatio: '3/4'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/portrait-3.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-ivoire)',
      background: 'rgba(20,20,27,0.7)',
      padding: '3px 8px',
      borderRadius: 2
    }
  }, "Avant")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      aspectRatio: '3/4'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/model-microlocks.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 8,
      left: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-obsidian)',
      background: 'var(--color-copper)',
      padding: '3px 8px',
      borderRadius: 2
    }
  }, "Aujourd\u2019hui")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 22px 24px'
    }
  }, steps.map((st, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: st.done ? 'var(--color-copper)' : 'var(--color-ivoire)',
      border: '2px solid ' + (st.done ? 'var(--color-copper)' : 'var(--color-argile)'),
      flex: '0 0 auto',
      marginTop: 4
    }
  }), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      flex: 1,
      background: 'var(--hairline)',
      minHeight: 30
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, st.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)',
      marginTop: 2
    }
  }, st.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, st.s))))));
}

/* ---- Rituel : ses produits ---- */
function Rituel() {
  const routine = [{
    m: 'Matin',
    p: 'Brume Traditionnelle',
    g: 'Réveiller & rafraîchir'
  }, {
    m: 'Matin',
    p: 'Sérum Racines',
    g: 'Cuir chevelu · pousse'
  }, {
    m: 'Soir',
    p: 'Huile Couronne',
    g: 'Sceller les pointes'
  }, {
    m: 'Hebdo',
    p: 'Shampoing Naturel',
    g: 'Purifier en douceur'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hdr, {
    sub: "Sur mesure pour vous",
    title: "Mon rituel."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 6px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, "Recommand\xE9 par Y\xE9man apr\xE8s votre derni\xE8re consultation."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 22px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, routine.map((r, i) => {
    const prod = window.MND.products.find(x => x.nom === r.p);
    return /*#__PURE__*/React.createElement(Card, {
      key: i,
      padding: 14,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        height: 58,
        borderRadius: 4,
        background: 'linear-gradient(160deg,var(--indigo-500),var(--color-indigo-deep))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/monograms/mono-copper.png",
      alt: "",
      style: {
        width: 22,
        opacity: 0.9
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--accent)'
      }
    }, r.m), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 18,
        color: 'var(--color-indigo)'
      }
    }, r.p), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11.5,
        fontWeight: 300,
        color: 'var(--ink-soft)'
      }
    }, r.g)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        letterSpacing: '0.08em',
        color: 'var(--ink-soft)'
      }
    }, prod ? FCFA(prod.prix) : ''));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px 24px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    variant: "primary"
  }, "Renouveler mon rituel"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)'
    }
  }, "Livraison \xE0 Cotonou \xB7 ou retrait au salon")));
}

/* ---- Cercle : communauté + écosystème ---- */
function Cercle() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hdr, {
    sub: "Votre communaut\xE9",
    title: "Le cercle."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "deep",
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "RACINES \xB7 le podcast"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 21,
      color: 'var(--color-ivoire)',
      marginTop: 6
    }
  }, "Microlocks : la patience comme prestige"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: 'var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "#14141B"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--indigo-100)'
    }
  }, "\xC9pisode 03 \xB7 37 min"))), /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, "Communaut\xE9 \xB7 Skool"), /*#__PURE__*/React.createElement(Badge, {
    tone: "indigo",
    size: "sm"
  }, "2 480 membres")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: 12
    }
  }, ['yeman-smile.jpg', 'portrait-2.jpg', 'brice-portrait.jpg'].map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      marginLeft: i ? -10 : 0,
      border: '2px solid var(--color-ivoire)',
      backgroundImage: `url(../../assets/photos/${p})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      marginLeft: 10,
      alignSelf: 'center'
    }
  }, "partagez votre jour ", ME.jour))), /*#__PURE__*/React.createElement(Card, {
    surface: "obsidian",
    padding: 18,
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('../../assets/patterns/pattern-rosette.png')",
      backgroundSize: 120,
      opacity: 0.06
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Le Couronnement"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-ivoire)',
      marginTop: 6
    }
  }, "Vous \xEAtes convi\xE9e \xB7 Cotonou"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--indigo-100)',
      marginTop: 4
    }
  }, "\xC9dition m\xE8re \xB7 d\xE9cembre \xB7 tapis cuivre"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "copper"
  }, "Confirmer ma place"))))));
}
const SCREENS = {
  accueil: Accueil,
  parcours: Parcours,
  rituel: Rituel,
  commu: Cercle
};
function ClientAuth({
  onAuth
}) {
  const [mode, setMode] = React.useState('choose'); // choose | login | signup | done
  const [f, setF] = React.useState({
    nom: '',
    tel: '',
    email: '',
    ville: 'Cotonou',
    loc: 'Sans locks (projet)',
    password: ''
  });
  const set = (k, v) => setF(o => ({
    ...o,
    [k]: v
  }));
  const inp = {
    width: '100%',
    border: 'none',
    borderBottom: '1px solid var(--hairline)',
    background: 'transparent',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    padding: '9px 2px',
    outline: 'none',
    color: 'var(--ink)'
  };
  const lab = {
    fontFamily: 'var(--font-sans)',
    fontSize: 10,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: 5,
    display: 'block',
    marginTop: 16
  };
  const signup = () => {
    if (window.LOKAA && window.LOKAA.addClient) {
      try {
        window.LOKAA.addClient({
          nom: f.nom || 'Nouvelle cliente',
          tel: f.tel,
          email: f.email,
          ville: f.ville,
          loc_type: f.loc
        });
      } catch (e) {}
    }
    setMode('done');
  };
  return /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 720,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 232,
      overflow: 'hidden',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/hero-poster.jpg",
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 22%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, var(--color-obsidian), rgba(20,20,27,0.2))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/monograms/mono-copper.png",
    alt: "",
    style: {
      width: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 30,
      color: 'var(--color-ivoire)',
      lineHeight: 1.05,
      marginTop: 8
    }
  }, "Ma Couronne"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 14,
      color: 'var(--copper-200)',
      marginTop: 4
    }
  }, "votre rituel, votre espace."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 24px 32px',
      flex: 1
    }
  }, mode === 'choose' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--ink-soft)',
      marginBottom: 22
    }
  }, "Suivez vos rendez-vous, vos locks et vos soins. Le h\xE9ros, c'est vous \u2014 MND vous guide."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    variant: "primary",
    onClick: () => setMode('signup')
  }, "Cr\xE9er mon compte"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    variant: "secondary",
    onClick: () => setMode('login')
  }, "J'ai d\xE9j\xE0 un compte"))), mode === 'login' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)',
      marginBottom: 8
    }
  }, "Bon retour"), /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Email ou t\xE9l\xE9phone"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    defaultValue: "adjoa.k@email.bj"
  }), /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Mot de passe"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    variant: "primary",
    onClick: onAuth
  }, "Se connecter")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('choose'),
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      marginTop: 14,
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, "\u2190 Retour")), mode === 'signup' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)',
      marginBottom: 4
    }
  }, "Cr\xE9er mon compte"), /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Nom complet"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: f.nom,
    onChange: e => set('nom', e.target.value),
    placeholder: "Votre nom"
  }), /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "T\xE9l\xE9phone / WhatsApp"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: f.tel,
    onChange: e => set('tel', e.target.value),
    placeholder: "+229 \u2026"
  }), /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: f.email,
    onChange: e => set('email', e.target.value),
    placeholder: "email@\u2026"
  }), /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Vos locks"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: f.loc,
    onChange: e => set('loc', e.target.value)
  }, ['Sans locks (projet)', 'Microlocks', 'Locks fines', 'Locks moyennes', 'Autre'].map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))), /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Mot de passe"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    type: "password",
    value: f.password,
    onChange: e => set('password', e.target.value),
    placeholder: "choisir un mot de passe"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    variant: "copper",
    onClick: signup
  }, "Cr\xE9er mon compte")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMode('choose'),
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      marginTop: 14,
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, "\u2190 Retour")), mode === 'done' && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      color: 'var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 18px',
      fontSize: 28
    }
  }, "\u265B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 26,
      color: 'var(--color-indigo)'
    }
  }, "Bienvenue, t\xEAte couronn\xE9e."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--ink-soft)',
      margin: '10px auto 22px',
      maxWidth: 280
    }
  }, "Votre compte est cr\xE9\xE9. Vous apparaissez maintenant dans le CRM de la Maison \u2014 votre passeport loc vous attend."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    variant: "primary",
    onClick: onAuth
  }, "Entrer dans Ma Couronne")))));
}
function ClientApp() {
  const [authed, setAuthed] = React.useState(false);
  const [tab, setTab] = React.useState('accueil');
  const Screen = SCREENS[tab];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 0',
      minHeight: '100vh',
      background: 'var(--color-sable)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    withRule: true,
    align: "center"
  }, "Espace client \xB7 Ma Couronne"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      marginTop: 8,
      maxWidth: 420
    }
  }, "Le h\xE9ros, c\u2019est vous. MND vous guide \u2014 accueil, r\xE9sultat, accompagnement, suivi.")), !authed ? /*#__PURE__*/React.createElement(ClientAuth, {
    onAuth: () => setAuthed(true)
  }) : /*#__PURE__*/React.createElement(Phone, null, /*#__PURE__*/React.createElement(Screen, {
    go: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      bottom: 0,
      display: 'flex',
      background: 'rgba(246,241,231,0.96)',
      backdropFilter: 'blur(8px)',
      borderTop: '1px solid var(--hairline)'
    }
  }, TABS.map(t => {
    const active = tab === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setTab(t.id),
      style: {
        flex: 1,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '12px 0 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: active ? 'var(--color-copper)' : 'var(--obsidian-300)'
      }
    }, t.g), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        letterSpacing: '0.08em',
        color: active ? 'var(--color-indigo)' : 'var(--ink-soft)'
      }
    }, t.label));
  }))));
}
Object.assign(window, {
  ClientApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/crm/Crm.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Filet,
  Stars,
  Eyebrow
} = window.MNDDesignSystem_a962de;
const FCFA = window.MND.FCFA;
const P = window.MND_PERSONAS || {};

/* ===== MND CRM — "Le Suivi" · la relation, mèche après mèche =====
   Le client est le héros ; le CRM est la mémoire du guide. */

const CLIENTS = [{
  id: 1,
  nom: 'Adjoa K.',
  profil: 'Microlocks',
  ville: 'Cotonou',
  depuis: 'Mar 2024',
  visites: 14,
  ltv: 412000,
  niveau: 'Couronne d’argent',
  diaspora: false,
  photo: 'model-microlocks.jpg',
  fidele: true,
  persona: 'exigeante'
}, {
  id: 2,
  nom: 'Naïma T.',
  profil: 'Locks fines',
  ville: 'Paris (diaspora)',
  depuis: 'Sep 2023',
  visites: 22,
  ltv: 690000,
  niveau: 'Couronne d’or',
  diaspora: true,
  photo: 'yeman-smile.jpg',
  fidele: true,
  persona: 'diaspora'
}, {
  id: 3,
  nom: 'Koffi M.',
  profil: 'Locks moyennes',
  ville: 'Cotonou',
  depuis: 'Jan 2025',
  visites: 3,
  ltv: 96000,
  niveau: 'Couronne de bronze',
  diaspora: false,
  photo: 'brice-portrait.jpg',
  fidele: false,
  persona: 'initie'
}, {
  id: 4,
  nom: 'Fatou B.',
  profil: 'Microlocks',
  ville: 'Atlanta (diaspora)',
  depuis: 'Fév 2024',
  visites: 11,
  ltv: 358000,
  niveau: 'Couronne d’argent',
  diaspora: true,
  photo: 'portrait-2.jpg',
  fidele: true,
  persona: 'calme'
}];
const JOURNAL = [{
  d: '5 juil 2025',
  t: 'Resserrage racines',
  s: 'À venir · 10:00 · Yéman',
  kind: 'rdv'
}, {
  d: '12 juin 2025',
  t: 'Achat boutique',
  s: 'Huile Couronne ×2 · WhatsApp',
  kind: 'shop'
}, {
  d: '20 mars 2025',
  t: 'Soin profond rituel',
  s: '1 an de couronne · offert',
  kind: 'soin'
}, {
  d: '14 déc 2024',
  t: 'Le Couronnement',
  s: 'Édition Cotonou · présente',
  kind: 'event'
}, {
  d: '8 juil 2024',
  t: 'Premier resserrage',
  s: 'Cuir chevelu sain · Brice',
  kind: 'soin'
}, {
  d: '2 mars 2024',
  t: 'Démarrage microlocks',
  s: 'Consultation + création · Brice',
  kind: 'start'
}];
const KIND = {
  rdv: 'var(--color-copper)',
  shop: 'var(--indigo-400)',
  soin: 'var(--color-indigo)',
  event: 'var(--copper-600)',
  start: 'var(--color-obsidian)'
};
function PersonaBadge({
  personaId,
  size = 'sm'
}) {
  const p = P[personaId];
  if (!p) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: p.couleur + '18',
      border: '1px solid ' + p.couleur + '44',
      borderRadius: 'var(--radius-pill)',
      padding: size === 'sm' ? '3px 10px' : '5px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: size === 'sm' ? 11 : 14
    }
  }, p.emoji), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 10.5 : 13,
      letterSpacing: '.08em',
      color: p.couleur,
      fontWeight: 500
    }
  }, p.nom));
}
function PersonaGuide({
  personaId
}) {
  const p = P[personaId];
  if (!p) return null;
  const tabs = [{
    id: 'comm',
    label: 'Communication',
    content: p.comm
  }, {
    id: 'staff',
    label: 'Guide staff',
    content: p.staff
  }, {
    id: 'retention',
    label: 'Fidélisation',
    content: p.retention
  }];
  const [tab, setTab] = React.useState('comm');
  const active = tabs.find(t => t.id === tab);
  return /*#__PURE__*/React.createElement(Card, {
    surface: "deep",
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 28,
      color: 'var(--color-copper)'
    }
  }, p.emoji), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Guide d\u2019accueil"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-ivoire)'
    }
  }, p.nom))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--hairline-invert)',
      marginBottom: 14
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 0',
      marginRight: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: tab === t.id ? 'var(--color-copper)' : 'var(--indigo-200)',
      borderBottom: tab === t.id ? '1px solid var(--color-copper)' : '1px solid transparent',
      marginBottom: -1
    }
  }, t.label))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13,
      lineHeight: 1.7,
      color: 'var(--indigo-100)',
      margin: 0,
      fontStyle: 'italic'
    }
  }, active?.content));
}
function ClientRow({
  c,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      padding: '12px 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (active ? 'var(--color-copper)' : 'transparent'),
      background: active ? 'var(--color-ivoire)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${c.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, c.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, c.profil, " \xB7 ", c.ville), c.persona && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(PersonaBadge, {
    personaId: c.persona
  }))), c.diaspora && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Diaspora"));
}
function Client360({
  c
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 76,
      height: 76,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${c.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '2px solid var(--color-copper)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 36,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, c.nom), c.fidele && /*#__PURE__*/React.createElement(Badge, {
    tone: "copper",
    size: "sm"
  }, c.niveau), c.persona && /*#__PURE__*/React.createElement(PersonaBadge, {
    personaId: c.persona,
    size: "md"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 4
    }
  }, c.profil, " \xB7 ", c.ville, " \xB7 cliente depuis ", c.depuis)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "copper"
  }, "Message WhatsApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 22
    }
  }, [['Valeur cliente', FCFA(c.ltv)], ['Visites', c.visites], ['Profil', c.profil], ['Fidélité', c.niveau]].map((k, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: 16,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, k[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)',
      marginTop: 6
    }
  }, k[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 22,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 21,
      color: 'var(--color-indigo)',
      margin: '0 0 8px'
    }
  }, "Le journal \xB7 m\xE8che apr\xE8s m\xE8che"), JOURNAL.map((j, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: KIND[j.kind],
      marginTop: 6,
      flex: '0 0 auto'
    }
  }), i < JOURNAL.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      flex: 1,
      background: 'var(--hairline)',
      minHeight: 26
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, j.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)',
      marginTop: 1
    }
  }, j.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, j.s))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "sable",
    hairline: false,
    padding: 20
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Rituel recommand\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, ['Brume Traditionnelle', 'Sérum Racines', 'Huile Couronne'].map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, p), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)'
    }
  }, FCFA((window.MND.products.find(x => x.nom === p) || {}).prix || 0)))))), /*#__PURE__*/React.createElement(Card, {
    surface: "deep",
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Suivi \xB7 prochaine attention"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-ivoire)',
      marginTop: 8
    }
  }, "Relancer pour resserrage"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--indigo-100)',
      marginTop: 4,
      lineHeight: 1.5
    }
  }, "Dernier soin il y a 5 semaines. Message chaleureux + cr\xE9neau samedi."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "copper"
  }, "Planifier"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    style: {
      color: 'var(--color-ivoire)',
      borderColor: 'var(--hairline-invert)'
    }
  }, "Noter"))), c.persona && /*#__PURE__*/React.createElement(PersonaGuide, {
    personaId: c.persona
  }))));
}
function CrmApp() {
  const [sel, setSel] = React.useState(CLIENTS[0]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 300,
      flex: '0 0 auto',
      background: 'var(--color-sable)',
      borderRight: '1px solid var(--hairline)',
      padding: '26px 16px',
      position: 'sticky',
      top: 0,
      height: '100vh',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px 18px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    withRule: true
  }, "CRM \xB7 Le Suivi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 26,
      color: 'var(--color-indigo)',
      marginTop: 8
    }
  }, "T\xEAtes couronn\xE9es")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, CLIENTS.map(c => /*#__PURE__*/React.createElement(ClientRow, {
    key: c.id,
    c: c,
    active: sel.id === c.id,
    onClick: () => setSel(c)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: '0 6px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    fullWidth: true
  }, "+ Nouvelle cliente"))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 36px',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Maison MND \xB7 la relation, m\xE8che apr\xE8s m\xE8che \xB7 20+ ans"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/monograms/mono-indigo.png",
    alt: "",
    style: {
      width: 26
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 36px 64px'
    }
  }, /*#__PURE__*/React.createElement(Client360, {
    c: sel
  }))));
}
Object.assign(window, {
  CrmApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/crm/Crm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/deck/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate; ↑/↓ with a thumbnail focused to
 *      step between slides; drag to reorder; right-click for
 *      Skip / Move up / Move down / Duplicate / Delete (Delete opens a
 *      Cancel/Delete confirm dialog). Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame { outline-color: #D97757; }
    .thumb[data-dragging] { opacity: 0.35; }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (up to 9 per view).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-validate$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      this._snapshotAuthorCss();
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(i);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) this._closeConfirm();
      });
      confirm.querySelector('.cancel').addEventListener('click', () => this._closeConfirm());
      confirm.querySelector('.danger').addEventListener('click', () => {
        const i = this._confirmIndex;
        this._closeConfirm();
        this._deleteSlide(i);
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      // Host posts __omelette_presenting while in fullscreen/tab presentation
      // mode — suppress the nav footer entirely (both hover and slide-change
      // flash) so the audience sees clean slides.
      if (!this._overlay || this._presenting) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        this._presenting = d.__omelette_presenting;
        if (this._presenting && this._overlay) {
          this._overlay.removeAttribute('data-visible');
          if (this._hideTimer) clearTimeout(this._hideTimer);
        }
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        t.num.textContent = String(i + 1);
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
      });
      this._thumbs = next;
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', () => this._go(idx(), 'click'));
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        this._dragFrom = idx();
        thumb.setAttribute('data-dragging', '');
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
      });
      thumb.addEventListener('dragend', () => {
        thumb.removeAttribute('data-dragging');
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes so a component-heavy deck doesn't run N copies
      // of each component's mount logic in the rail. Children are
      // preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content; the querySelectorAll NodeList
      // is static, so nested custom elements in the moved subtree are
      // still visited on later iterations.
      const neuter = el => {
        const box = document.createElement('div');
        box.style.cssText = (el.getAttribute('style') || '') + ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);';
        box.className = el.className;
        // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
        // descendant selectors still match the neutered root.
        for (const a of el.attributes) {
          const n = a.name;
          if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
            box.setAttribute(n, a.value);
          }
        }
        while (el.firstChild) box.appendChild(el.firstChild);
        return box;
      };
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(neuter(el));
      });
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      this._menu.querySelector('[data-act="delete"]').disabled = this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
    }
    _openConfirm(i) {
      if (!this._confirm) return;
      this._confirmIndex = i;
      this._confirm.querySelector('.title').textContent = 'Delete slide ' + (i + 1) + '?';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmIndex = -1;
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    _emitDcOp(op, slide, lock, newIndex) {
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      if (this._emitDcOp({
        op: 'duplicate'
      }, slide, true, i + 1)) return;
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/deck/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/erp/Erp.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Filet,
  Badge,
  Card,
  Stars
} = window.MNDDesignSystem_a962de;
const FCFA = window.MND.FCFA;

/* ============ MND ERP — "Le Trône" · gestion souveraine ============
   Brand-native business OS: têtes couronnées, rituels, atelier, gamme. */

const NAV = [{
  id: 'board',
  label: 'Tableau de bord',
  glyph: '◆'
}, {
  id: 'rdv',
  label: 'Rendez-vous',
  glyph: '◷'
}, {
  id: 'clients',
  label: 'Têtes couronnées',
  glyph: '♛'
}, {
  id: 'stock',
  label: 'Gamme & stock',
  glyph: '⬡'
}, {
  id: 'academie',
  label: 'Académie',
  glyph: '✦'
}, {
  id: 'finance',
  label: 'Finances',
  glyph: '▲'
}];
const RDV = [{
  h: '09:00',
  client: 'Adjoa K.',
  svc: 'Resserrage racines',
  maitre: 'Yéman',
  tone: 'indigo',
  statut: 'Confirmé'
}, {
  h: '10:30',
  client: 'Koffi M.',
  svc: 'Création microlocks',
  maitre: 'Brice',
  tone: 'copper',
  statut: 'En cours'
}, {
  h: '13:00',
  client: 'Naïma T.',
  svc: 'Soin profond rituel',
  maitre: 'Yéman',
  tone: 'indigo',
  statut: 'Confirmé'
}, {
  h: '15:30',
  client: 'Sékou D.',
  svc: 'Consultation premium',
  maitre: 'Brice',
  tone: 'sable',
  statut: 'À venir'
}, {
  h: '17:00',
  client: 'Fatou B.',
  svc: 'Détox cuir chevelu',
  maitre: 'Yéman',
  tone: 'indigo',
  statut: 'À venir'
}];
const CLIENTS = [{
  nom: 'Adjoa K.',
  profil: 'Microlocks',
  depuis: 'Mar 2024',
  visites: 14,
  fidele: true
}, {
  nom: 'Koffi M.',
  profil: 'Locks moyennes',
  depuis: 'Jan 2025',
  visites: 3,
  fidele: false
}, {
  nom: 'Naïma T.',
  profil: 'Locks fines',
  depuis: 'Sep 2023',
  visites: 22,
  fidele: true
}, {
  nom: 'Sékou D.',
  profil: 'Démarrage',
  depuis: 'Juin 2025',
  visites: 1,
  fidele: false
}, {
  nom: 'Fatou B.',
  profil: 'Microlocks',
  depuis: 'Fév 2024',
  visites: 11,
  fidele: true
}];

// stock derived from real gamme
const STOCK = window.MND.products.map((p, i) => ({
  nom: p.nom,
  contenance: p.contenance,
  prix: p.prix,
  tone: p.tone,
  qte: [42, 7, 28, 3, 19, 64][i] ?? 20,
  seuil: [15, 10, 12, 8, 10, 25][i] ?? 10
}));
function KPI({
  label,
  value,
  sub,
  accent
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: 22,
    topFilet: accent,
    hover: true,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 42,
      lineHeight: 1,
      color: 'var(--color-indigo)',
      marginTop: 12
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--accent-strong)',
      marginTop: 8
    }
  }, sub));
}
function ToneDot({
  tone
}) {
  const c = {
    indigo: 'var(--color-indigo)',
    copper: 'var(--color-copper)',
    sable: 'var(--color-argile)',
    obsidian: 'var(--color-obsidian)'
  }[tone] || 'var(--color-indigo)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: c,
      flex: '0 0 auto',
      display: 'inline-block'
    }
  });
}
function SectionTitle({
  k,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, children));
}

/* ---- Views ---- */
function Board() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    k: "Aujourd'hui \xB7 Salon de Cotonou"
  }, "bonsoir, Y\xE9man."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Revenu du mois",
    value: "2,84 M",
    sub: "\u25B2 18% vs. mois dernier",
    accent: true
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Rendez-vous \xB7 jour",
    value: "5",
    sub: "2 confirm\xE9s \xB7 1 en cours"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "T\xEAtes couronn\xE9es",
    value: "248",
    sub: "+12 ce mois"
  }), /*#__PURE__*/React.createElement(KPI, {
    label: "Alertes stock",
    value: "2",
    sub: "Shampoing \xB7 S\xE9rum bas"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "Le carnet du jour"), /*#__PURE__*/React.createElement(Badge, {
    tone: "copper",
    size: "sm"
  }, "Mar. 25 juin")), RDV.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 0',
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)',
      width: 56,
      flex: '0 0 auto'
    }
  }, r.h), /*#__PURE__*/React.createElement(ToneDot, {
    tone: r.tone
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ink)'
    }
  }, r.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, r.svc, " \xB7 ", r.maitre)), /*#__PURE__*/React.createElement(Badge, {
    tone: r.statut === 'En cours' ? 'solid' : r.statut === 'Confirmé' ? 'indigo' : 'outline',
    size: "sm"
  }, r.statut)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "deep",
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Revenu \xB7 7 jours"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 7,
      height: 90,
      marginTop: 18
    }
  }, [52, 68, 40, 84, 72, 96, 60].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: h + '%',
      background: i === 5 ? 'var(--color-copper)' : 'rgba(246,241,231,0.22)',
      borderRadius: '2px 2px 0 0'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 30,
      color: 'var(--color-ivoire)',
      marginTop: 16
    }
  }, "684 000 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--indigo-200)'
    }
  }, "FCFA")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--indigo-100)'
    }
  }, "cette semaine \xB7 pic samedi")), /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 20,
      color: 'var(--color-indigo)',
      margin: '0 0 12px'
    }
  }, "Activit\xE9"), ['Commande WhatsApp · Huile Couronne ×2', 'Adjoa K. — niveau Couronne d\u2019argent', 'Nouvelle inscription Académie · niveau I'].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      padding: '9px 0',
      borderTop: i ? '1px solid var(--hairline)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: 'var(--color-copper)',
      transform: 'rotate(45deg)',
      marginTop: 6,
      flex: '0 0 auto'
    }
  }), a))))));
}
function Rdv() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    k: "Le carnet \xB7 agenda"
  }, "les rendez-vous."), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 1.4fr 1.6fr 1fr 1fr',
      padding: '14px 24px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Heure"), /*#__PURE__*/React.createElement("span", null, "T\xEAte couronn\xE9e"), /*#__PURE__*/React.createElement("span", null, "Rituel"), /*#__PURE__*/React.createElement("span", null, "Ma\xEEtre"), /*#__PURE__*/React.createElement("span", null, "Statut")), RDV.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 1.4fr 1.6fr 1fr 1fr',
      padding: '16px 24px',
      borderTop: '1px solid var(--hairline)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      color: 'var(--color-indigo)'
    }
  }, r.h), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, r.client), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, r.svc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, r.maitre), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: r.statut === 'En cours' ? 'solid' : r.statut === 'Confirmé' ? 'indigo' : 'outline',
    size: "sm"
  }, r.statut))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "copper"
  }, "+ Nouveau rendez-vous")));
}
function Clients() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    k: "La communaut\xE9 \xB7 client\xE8le"
  }, "les t\xEAtes couronn\xE9es."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, CLIENTS.map((c, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: 22,
    hover: true,
    topFilet: c.fidele
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      color: 'var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 20
    }
  }, c.nom[0]), c.fidele && /*#__PURE__*/React.createElement(Badge, {
    tone: "copper",
    size: "sm"
  }, "Fid\xE8le")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-indigo)',
      marginTop: 14
    }
  }, c.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--accent)',
      letterSpacing: '0.08em'
    }
  }, c.profil), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid var(--hairline)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Depuis ", c.depuis), /*#__PURE__*/React.createElement("span", null, c.visites, " visites"))))));
}
function Stock() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    k: "La gamme \xB7 inventaire"
  }, "gamme & stock."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 18
    }
  }, STOCK.map((s, i) => {
    const low = s.qte <= s.seuil;
    return /*#__PURE__*/React.createElement(Card, {
      key: i,
      padding: 20,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(ToneDot, {
      tone: s.tone
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 20,
        color: 'var(--color-indigo)'
      }
    }, s.nom), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)'
      }
    }, s.contenance, " \xB7 ", FCFA(s.prix))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 28,
        color: low ? 'var(--copper-600)' : 'var(--color-indigo)'
      }
    }, s.qte), low ? /*#__PURE__*/React.createElement(Badge, {
      tone: "copper",
      size: "sm"
    }, "\xC0 r\xE9approvisionner") : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--ink-soft)',
        letterSpacing: '0.1em'
      }
    }, "en stock")));
  })));
}
function Academie() {
  const promos = [{
    n: 'Promotion Niveau I',
    dates: 'Juil — Août 2025',
    places: '8 / 12',
    tone: 'indigo'
  }, {
    n: 'Praticien·ne · Niveau II',
    dates: 'Sept — Oct 2025',
    places: '5 / 8',
    tone: 'copper'
  }, {
    n: 'Maître locks · Niveau III',
    dates: 'Jan — Juin 2026',
    places: '2 / 4',
    tone: 'sable'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    k: "Transmission \xB7 formation"
  }, "l'Acad\xE9mie."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, promos.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: 22,
    hover: true,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(ToneDot, {
    tone: p.tone
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-indigo)'
    }
  }, p.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, p.dates)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)'
    }
  }, p.places), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "inscrits"))))));
}
function Finance() {
  const rows = [{
    k: 'Soins en salon',
    v: 1680000,
    pct: 59
  }, {
    k: 'Vente gamme',
    v: 720000,
    pct: 25
  }, {
    k: 'Académie',
    v: 320000,
    pct: 11
  }, {
    k: 'Événements',
    v: 120000,
    pct: 5
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, {
    k: "Le tr\xE9sor \xB7 revenus"
  }, "finances \xB7 juin."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Revenu total \xB7 mois"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 52,
      color: 'var(--color-indigo)',
      margin: '8px 0 4px'
    }
  }, "2,84 M"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--accent-strong)'
    }
  }, "\u25B2 18% vs. mai \xB7 objectif 3 M"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    variant: "copper"
  })), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, r.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, FCFA(r.v))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--hairline)',
      borderRadius: 2,
      marginTop: 8,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: r.pct + '%',
      height: '100%',
      background: 'var(--color-copper)'
    }
  }))))), /*#__PURE__*/React.createElement(Card, {
    surface: "deep",
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Encaissements"), [['Mobile Money', 48], ['Espèces', 31], ['WhatsApp / livraison', 14], ['Carte', 7]].map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      borderTop: i ? '1px solid var(--hairline-invert)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--color-ivoire)'
    }
  }, m[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-copper)'
    }
  }, m[1], "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12.5,
      color: 'var(--indigo-100)',
      lineHeight: 1.6
    }
  }, "Le mobile money domine \u2014 un syst\xE8me pens\xE9 pour Cotonou, pas calqu\xE9 sur l'\xE9tranger."))));
}
const VIEWS = {
  board: Board,
  rdv: Rdv,
  clients: Clients,
  stock: Stock,
  academie: Academie,
  finance: Finance
};
function ErpApp() {
  const [view, setView] = React.useState('board');
  const View = VIEWS[view];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 264,
      flex: '0 0 auto',
      background: 'var(--color-obsidian)',
      color: 'var(--color-ivoire)',
      display: 'flex',
      flexDirection: 'column',
      padding: '28px 0',
      position: 'sticky',
      top: 0,
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '0 26px 26px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/monograms/mono-copper.png",
    alt: "",
    style: {
      width: 30
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      letterSpacing: '0.26em',
      textIndent: '0.26em',
      color: 'var(--color-ivoire)'
    }
  }, "MND"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 8.5,
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Le Tr\xF4ne \xB7 ERP"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '0 14px',
      flex: 1
    }
  }, NAV.map(n => {
    const active = view === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => setView(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        textAlign: 'left',
        cursor: 'pointer',
        padding: '13px 14px',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        background: active ? 'var(--color-indigo)' : 'transparent',
        color: active ? 'var(--color-ivoire)' : 'var(--indigo-200)',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        letterSpacing: '0.04em',
        borderLeft: active ? '2px solid var(--color-copper)' : '2px solid transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-copper)',
        fontSize: 13,
        width: 16
      }
    }, n.glyph), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 26px 0',
      borderTop: '1px solid var(--hairline-invert)',
      margin: '0 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      color: 'var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 15
    }
  }, "Y"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--color-ivoire)'
    }
  }, "Y\xE9man A."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      color: 'var(--indigo-200)'
    }
  }, "Co-fondatrice"))))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 36px',
      borderBottom: '1px solid var(--hairline)',
      background: 'rgba(246,241,231,0.7)',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Maison MND \xB7 Cotonou \xB7 B\xE9nin"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, "Mardi 25 juin 2026"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary"
  }, "+ Encaisser"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '34px 36px 64px'
    }
  }, /*#__PURE__*/React.createElement(View, null))));
}
Object.assign(window, {
  ErpApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/erp/Erp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ClientApp.jsx
try { (() => {
/* LOKAA — Client front-office app (portail cliente) with login.
   Standalone from the back-office; reuses window.LOKAA data. */
const {
  Button: CABtn,
  Badge: CABadge
} = window.MNDDesignSystem_a962de;
const LC = window.LOKAA;
const FC = LC.FCFA;
const caWrap = {
  minHeight: '100vh',
  background: 'var(--color-ivoire)',
  fontFamily: 'var(--font-sans)'
};
const caCard = {
  background: '#fff',
  borderRadius: 'var(--radius-lg)',
  border: '1px solid var(--hairline)',
  boxShadow: '0 1px 2px rgba(20,20,27,0.04)'
};
const caLbl = {
  fontFamily: 'var(--font-sans)',
  fontSize: 9,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'var(--ink-soft)'
};
const caSerif = s => ({
  fontFamily: 'var(--font-serif)',
  fontWeight: 400,
  color: 'var(--color-indigo)',
  ...s
});

/* ---------- LOGIN ---------- */
function ClientLogin({
  onAuth
}) {
  const B = LC.getBrand();
  const [email, setEmail] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [err, setErr] = React.useState('');
  const clients = LC.clients;
  const submit = () => {
    const c = clients.find(x => x.email.toLowerCase() === email.trim().toLowerCase());
    if (!c) {
      setErr("Aucun compte trouvé pour cet e-mail.");
      return;
    }
    if (!pwd) {
      setErr('Entrez votre mot de passe.');
      return;
    }
    onAuth(c);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...caWrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(420px, 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/logos/${B.logo || 'logo-indigo.png'}`,
    alt: B.name,
    style: {
      height: 54,
      marginBottom: 14
    },
    onError: e => {
      e.target.style.display = 'none';
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: caSerif({
      fontSize: 26
    })
  }, "Espace cliente"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      margin: '6px 0 0'
    }
  }, "Suivez vos locks, vos rendez-vous et vos soins.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...caCard,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: caLbl
  }, "E-mail"), /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      setErr('');
    },
    onKeyDown: e => e.key === 'Enter' && submit(),
    placeholder: "vous@email.com",
    style: inCA
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...caLbl,
      marginTop: 16
    }
  }, "Mot de passe"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pwd,
    onChange: e => {
      setPwd(e.target.value);
      setErr('');
    },
    onKeyDown: e => e.key === 'Enter' && submit(),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    style: inCA
  }), err && /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#a8324a',
      fontSize: 12,
      marginTop: 12
    }
  }, err), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(CABtn, {
    variant: "primary",
    fullWidth: true,
    onClick: submit
  }, "Se connecter")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 14,
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, "Pas encore de compte ? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-copper)',
      cursor: 'pointer'
    },
    onClick: () => {
      setEmail(clients[0].email);
      setPwd('demo');
    }
  }, "Essayer en d\xE9mo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 18,
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, "Comptes d\xE9mo : ", clients.slice(0, 2).map(c => c.email).join(' · '))));
}
const inCA = {
  width: '100%',
  marginTop: 6,
  padding: '11px 0',
  border: 'none',
  borderBottom: '1.5px solid var(--hairline)',
  background: 'transparent',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  color: 'var(--color-indigo)',
  outline: 'none'
};

/* ---------- PORTAL ---------- */
function ClientPortal({
  client,
  onLogout
}) {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LC.onAppts(force), []);
  const B = LC.getBrand();
  const c = LC.clientById(client.id) || client;
  const appts = LC.upcomingAppts().filter(a => a.client === c.id);
  const past = LC.pastAppts().filter(a => a.client === c.id);
  const packs = LC.packsOfClient(c.nom);
  const subs = LC.subsOfClient(c.nom);
  const photos = LC.photoSchedule(c.id);
  const nextPhoto = LC.nextPhotoDue(c.id);
  const [book, setBook] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: caWrap
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--color-indigo)',
      padding: '18px 22px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/monograms/mono-copper.png`,
    alt: "",
    style: {
      height: 30
    },
    onError: e => {
      e.target.style.display = 'none';
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-ivoire)'
    }
  }, B.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Espace cliente"))), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      background: 'none',
      border: '1px solid rgba(255,255,255,0.25)',
      borderRadius: 'var(--radius-pill)',
      color: 'var(--color-ivoire)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '7px 14px',
      cursor: 'pointer'
    }
  }, "D\xE9connexion")), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '28px 22px 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      flex: '0 0 auto',
      backgroundImage: `url(../../assets/photos/${c.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '2px solid var(--color-copper)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: caSerif({
      fontSize: 26
    })
  }, "Bonjour, ", c.nom.split(' ')[0], "."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, c.loc_type, " \xB7 ", c.tier, " \xB7 ", c.points, " points"))), nextPhoto && /*#__PURE__*/React.createElement("div", {
    style: {
      ...caCard,
      padding: 18,
      marginBottom: 18,
      borderLeft: '3px solid var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: caSerif({
      fontSize: 16
    })
  }, "Photo de suivi \xB7 ", nextPhoto.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      marginTop: 3
    }
  }, "Apportez vos locks au prochain rendez-vous pour immortaliser leur \xE9volution.")), /*#__PURE__*/React.createElement(CABadge, {
    tone: "copper",
    size: "sm"
  }, "\xC0 faire")), /*#__PURE__*/React.createElement(Section, {
    title: "Mes rendez-vous",
    action: /*#__PURE__*/React.createElement(CABtn, {
      size: "sm",
      variant: "copper",
      onClick: () => setBook(true)
    }, "R\xE9server")
  }, appts.length === 0 && /*#__PURE__*/React.createElement(Empty, null, "Aucun rendez-vous \xE0 venir. R\xE9servez votre prochaine s\xE9ance."), appts.map(a => {
    const s = LC.svcById(a.svc);
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: rowCA
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: caSerif({
        fontSize: 15
      })
    }, s ? s.nom : 'Soin'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-soft)',
        marginTop: 2
      }
    }, a.date, " \xB7 ", a.h, " \xB7 ", a.stylist)), /*#__PURE__*/React.createElement(CABadge, {
      tone: "indigo",
      size: "sm"
    }, a.statut));
  })), (packs.length > 0 || subs.length > 0) && /*#__PURE__*/React.createElement(Section, {
    title: "Mes carnets & abonnements"
  }, packs.map((p, i) => {
    const used = p.lignes.reduce((s, l) => s + l.used, 0);
    const tot = p.lignes.reduce((s, l) => s + l.total, 0);
    return /*#__PURE__*/React.createElement("div", {
      key: 'p' + i,
      style: rowCA
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: caSerif({
        fontSize: 15
      })
    }, p.nom), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: 'var(--color-sable)',
        borderRadius: 4,
        marginTop: 8,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${tot ? used / tot * 100 : 0}%`,
        height: '100%',
        background: 'var(--color-copper)'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        minWidth: 64
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: caSerif({
        fontSize: 18
      })
    }, tot - used), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-soft)'
      }
    }, "restant", tot - used > 1 ? 's' : '')));
  }), subs.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: 's' + i,
    style: rowCA
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: caSerif({
      fontSize: 15
    })
  }, s.plan), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, "Prochaine : ", s.prochaine)), /*#__PURE__*/React.createElement(CABadge, {
    tone: s.statut === 'Paiement dû' ? 'outline' : 'solid',
    size: "sm"
  }, s.statut)))), /*#__PURE__*/React.createElement(Section, {
    title: "Mon parcours locks"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      paddingBottom: 4
    }
  }, photos.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: '0 0 auto',
      width: 92,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      height: 92,
      borderRadius: 'var(--radius-md)',
      background: m.status === 'fait' ? 'var(--color-indigo)' : 'var(--color-sable)',
      border: '1px solid var(--hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: m.status === 'fait' ? 'var(--color-copper)' : 'var(--ink-soft)',
      fontFamily: 'var(--font-serif)',
      fontSize: 13
    }
  }, m.status === 'fait' ? '✓' : m.label.split(' ')[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'var(--ink-soft)',
      marginTop: 6
    }
  }, m.label))))), past.length > 0 && /*#__PURE__*/React.createElement(Section, {
    title: "Historique"
  }, past.slice(0, 5).map(a => {
    const s = LC.svcById(a.svc);
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      style: rowCA
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--color-indigo)'
      }
    }, s ? s.nom : 'Soin'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-soft)'
      }
    }, a.date));
  }))), book && /*#__PURE__*/React.createElement(BookSheet, {
    client: c,
    onClose: () => setBook(false)
  }));
}
function Section({
  title,
  action,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: caLbl
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      ...caCard,
      padding: 6
    }
  }, children));
}
const rowCA = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  padding: '13px 14px',
  borderBottom: '1px solid var(--color-sable)'
};
function Empty({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 14px',
      textAlign: 'center',
      fontSize: 13,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, children);
}

/* ---------- client-side booking sheet ---------- */
function BookSheet({
  client,
  onClose
}) {
  const svcs = LC.services.filter(s => !s.archived).slice(0, 6);
  const [svcId, setSvcId] = React.useState(svcs[0] ? svcs[0].id : null);
  const [day, setDay] = React.useState('Jeu 3 juil');
  const [time, setTime] = React.useState('09:00');
  const [done, setDone] = React.useState(false);
  const svc = LC.svcById(svcId);
  const confirm = () => {
    LC.addAppt({
      client: client.id,
      svc: svcId,
      h: time,
      date: day,
      dur: svc ? parseInt(svc.duree) || 60 : 60,
      stylist: 'À assigner',
      statut: 'À venir'
    });
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(20,20,27,0.55)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      width: 'min(480px, 100%)',
      borderRadius: '20px 20px 0 0',
      padding: 26,
      maxHeight: '88vh',
      overflowY: 'auto'
    },
    onClick: e => e.stopPropagation()
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: caSerif({
      fontSize: 24
    })
  }, "Demande envoy\xE9e"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      margin: '8px auto 0',
      maxWidth: 300,
      lineHeight: 1.55
    }
  }, svc ? svc.nom : '', " \xB7 ", day, " \xE0 ", time, ".", /*#__PURE__*/React.createElement("br", null), "La Maison confirmera par WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(CABtn, {
    variant: "primary",
    onClick: onClose
  }, "Fermer"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: caSerif({
      fontSize: 22
    })
  }, "R\xE9server un soin"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      color: 'var(--ink-soft)',
      cursor: 'pointer'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: caLbl
  }, "Service"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      margin: '8px 0 18px'
    }
  }, svcs.map(s => {
    const on = s.id === svcId;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => setSvcId(s.id),
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '11px 14px',
        borderRadius: 'var(--radius-md)',
        border: '1.5px solid ' + (on ? 'var(--color-copper)' : 'var(--hairline)'),
        background: on ? 'var(--color-sable)' : '#fff',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: caSerif({
        fontSize: 14.5
      })
    }, s.nom), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 11.5,
        color: 'var(--ink-soft)'
      }
    }, s.cat, " \xB7 ", s.duree)), /*#__PURE__*/React.createElement("span", {
      style: caSerif({
        fontSize: 15,
        color: 'var(--color-copper)'
      })
    }, FC(s.prix)));
  })), /*#__PURE__*/React.createElement("div", {
    style: caLbl
  }, "Jour"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      margin: '8px 0 16px'
    }
  }, ['Jeu 3 juil', 'Ven 4 juil', 'Sam 5 juil', 'Lun 7 juil'].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setDay(d),
    style: chipCA(d === day)
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: caLbl
  }, "Heure"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      margin: '8px 0 22px'
    }
  }, ['09:00', '10:30', '13:00', '15:30'].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTime(t),
    style: chipCA(t === time)
  }, t))), /*#__PURE__*/React.createElement(CABtn, {
    variant: "primary",
    fullWidth: true,
    onClick: confirm
  }, "Demander ce rendez-vous"))));
}
const chipCA = on => ({
  fontFamily: 'var(--font-sans)',
  fontSize: 12.5,
  padding: '8px 14px',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  border: '1px solid ' + (on ? 'var(--color-copper)' : 'var(--hairline)'),
  background: on ? 'var(--color-indigo)' : '#fff',
  color: on ? 'var(--color-ivoire)' : 'var(--color-indigo)'
});

/* ---------- root ---------- */
function ClientApp() {
  const [client, setClient] = React.useState(null);
  if (!client) return /*#__PURE__*/React.createElement(ClientLogin, {
    onAuth: setClient
  });
  return /*#__PURE__*/React.createElement(ClientPortal, {
    client: client,
    onLogout: () => setClient(null)
  });
}
Object.assign(window, {
  LK_ClientApp: ClientApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ClientApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensA.jsx
try { (() => {
/* LOKAA Phase 1 — Screens A: Dashboard, Appointments, Clients/Loc Passport */
const {
  Button,
  Badge,
  Card,
  Filet,
  Stars,
  Eyebrow
} = window.MNDDesignSystem_a962de;
const L = window.LOKAA;
const FCFA = L.FCFA;
const P = window.MND_PERSONAS || {};
const KIND_C = {
  start: 'var(--color-obsidian)',
  soin: 'var(--color-indigo)',
  event: 'var(--copper-600)'
};
const STATUT_TONE = s => s === 'En cours' ? 'solid' : s === 'Confirmé' ? 'indigo' : 'outline';
function Title({
  k,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, children));
}
function KPI({
  label,
  value,
  sub,
  accent
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    topFilet: accent,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 40,
      lineHeight: 1,
      color: 'var(--color-indigo)',
      marginTop: 10
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--accent-strong)',
      marginTop: 7
    }
  }, sub));
}

/* ---------- DASHBOARD ---------- */
function Dashboard({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, {
    k: "Le Tr\xF4ne \xB7 Cotonou \xB7 jeu. 26 juin 2026"
  }, "Bonsoir, Y\xE9man."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 16
    }
  }, [['revenus', 'Revenus réels · mois', L.totalRevenue(), 'var(--color-indigo)'], ['depenses', 'Dépenses réelles · mois', L.totalExpenses(), 'var(--color-copper)'], ['net', 'Résultat net', L.netResult(), L.netResult() >= 0 ? '#1F8A5B' : '#B23A48']].map(([id, lab, val, col]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => go('summary', {
      tab: id
    }),
    style: {
      flex: 1,
      textAlign: 'left',
      cursor: 'pointer',
      background: 'var(--color-ivoire)',
      border: '1px solid var(--hairline)',
      borderTop: '3px solid ' + col,
      borderRadius: 'var(--radius-md)',
      padding: '20px 22px',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, lab), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: col,
      marginTop: 8
    }
  }, L.FCFA(val)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--accent)',
      marginTop: 5
    }
  }, "Voir le d\xE9tail \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go('summary', {
      tab: 'revenus'
    }),
    style: {
      flex: 1,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Revenu \xB7 mois",
    value: L.moneyCompact(2840000),
    sub: "\u25B2 18% vs. mai",
    accent: true
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => go('rdv'),
    style: {
      flex: 1,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "RDV aujourd'hui",
    value: "4",
    sub: "1 en cours \xB7 1 install J1/4"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => go('clients'),
    style: {
      flex: 1,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Customers",
    value: "248",
    sub: "+12 ce mois"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => go('stock'),
    style: {
      flex: 1,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(KPI, {
    label: "Alertes stock",
    value: "2",
    sub: "Shampoing \xB7 S\xE9rum bas"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "Le carnet du jour"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    onClick: () => go('rdv')
  }, "Tout voir \u2192")), L.today.map((r, i) => {
    const c = L.clientById(r.client),
      s = L.svcById(r.svc);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '13px 0',
        borderTop: '1px solid var(--hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 19,
        color: 'var(--color-indigo)',
        width: 52,
        flex: '0 0 auto'
      }
    }, r.h), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: 'var(--ink)'
      }
    }, c.nom, " \xB7 ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-soft)'
      }
    }, s.nom)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)'
      }
    }, r.stylist, r.daysTotal ? ` · installation jour ${r.day}/${r.daysTotal}` : '')), r.statut === 'En cours' ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "copper",
      onClick: () => go('pos', {
        svc: r.svc,
        client: c.nom
      })
    }, "Terminer & encaisser") : /*#__PURE__*/React.createElement(Badge, {
      tone: STATUT_TONE(r.statut),
      size: "sm"
    }, r.statut));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "deep",
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Revenu \xB7 7 jours"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 7,
      height: 84,
      marginTop: 16
    }
  }, [52, 68, 40, 84, 72, 96, 60].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: h + '%',
      background: i === 5 ? 'var(--color-copper)' : 'rgba(246,241,231,0.22)',
      borderRadius: '2px 2px 0 0'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 28,
      color: 'var(--color-ivoire)',
      marginTop: 14
    }
  }, L.money(684000))), /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Encaissements \xB7 jour"), [['Mobile Money', 61, 'momo'], ['Espèces', 27, 'cash'], ['WhatsApp', 12, 'whatsapp']].map(([m, p], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, m), /*#__PURE__*/React.createElement("span", null, p, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--hairline)',
      borderRadius: 2,
      marginTop: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: p + '%',
      height: '100%',
      background: 'var(--color-copper)'
    }
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "Consultations \xE0 venir"), /*#__PURE__*/React.createElement(Badge, {
    tone: "copper",
    size: "sm"
  }, L.consultations.length, " planifi\xE9es")), L.consultations.map((cs, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '13px 0',
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 130,
      flex: '0 0 auto',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      letterSpacing: '0.04em',
      color: 'var(--color-copper)'
    }
  }, cs.date), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, cs.client, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)'
    }
  }, cs.objet)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, cs.maitre)), /*#__PURE__*/React.createElement(Badge, {
    tone: cs.statut === 'À venir' ? 'outline' : 'indigo',
    size: "sm"
  }, cs.statut))))));
}

/* ---------- APPOINTMENTS ---------- */
function Appointments() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => L.onAppts(force), []);
  const [booking, setBooking] = React.useState(null); // null | {} (new) | {editing, ...}
  const [finish, setFinish] = React.useState(null); // appointment being finished
  const [sel, setSel] = React.useState([]); // multi-select by id
  const [bulkDone, setBulkDone] = React.useState(null);
  const upcoming = L.upcomingAppts(),
    past = L.pastAppts();
  const toggle = id => setSel(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const allOn = sel.length === upcoming.length && upcoming.length > 0;
  const toggleAll = () => setSel(allOn ? [] : upcoming.map(r => r.id));
  const bulk = action => {
    setBulkDone(`${action} · ${sel.length} rendez-vous`);
    setSel([]);
    setTimeout(() => setBulkDone(null), 2600);
  };
  const ApptRow = ({
    r
  }) => {
    const c = L.clientById(r.client),
      s = L.svcById(r.svc);
    const on = sel.includes(r.id);
    const done = r.statut === 'Terminé';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '38px 130px 70px 1.2fr 1.5fr 0.9fr 0.9fr 70px',
        padding: '15px 22px',
        borderTop: '1px solid var(--hairline)',
        alignItems: 'center',
        background: on ? 'var(--copper-50)' : 'transparent',
        opacity: done ? 0.72 : 1
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: on,
      disabled: done,
      onChange: () => toggle(r.id),
      style: {
        width: 16,
        height: 16,
        accentColor: 'var(--color-indigo)',
        cursor: done ? 'default' : 'pointer'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--ink-soft)'
      }
    }, r.date), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 18,
        color: 'var(--color-indigo)'
      }
    }, r.h), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: 'var(--ink)'
      }
    }, c ? c.nom : r.client), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 300,
        color: 'var(--ink-soft)'
      }
    }, s ? s.nom : r.svc, r.daysTotal ? /*#__PURE__*/React.createElement(Badge, {
      tone: "copper",
      size: "sm",
      style: {
        marginLeft: 8
      }
    }, "J", r.day, "/", r.daysTotal) : ''), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--ink)'
      }
    }, r.stylist), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
      tone: STATUT_TONE(r.statut),
      size: "sm"
    }, r.statut)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, !done && /*#__PURE__*/React.createElement("button", {
      onClick: () => setFinish(r),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 11.5,
        fontWeight: 500,
        color: 'var(--color-indigo)'
      }
    }, "Terminer"), !done && /*#__PURE__*/React.createElement("button", {
      onClick: () => setBooking({
        editing: true,
        clientId: r.client,
        svcId: r.svc,
        time: r.h,
        stylist: r.stylist
      }),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 11.5,
        color: 'var(--color-copper)'
      }
    }, "Modifier"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setBooking({
        clientId: r.client,
        svcId: r.svc,
        time: r.h,
        stylist: r.stylist
      }),
      title: "Dupliquer ce rendez-vous",
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 11.5,
        color: 'var(--ink-soft)'
      }
    }, "Dupliquer"), !done && /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        if (confirm('Annuler ce rendez-vous de ' + c.nom + ' ?')) L.cancelAppt(r.id);
      },
      title: "Annuler ce rendez-vous",
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 11.5,
        color: '#a8324a'
      }
    }, "Annuler")));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    k: "Le carnet \xB7 agenda"
  }, "Rendez-vous."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setBooking({
      past: true
    })
  }, "+ RDV pass\xE9"), /*#__PURE__*/React.createElement(Button, {
    variant: "copper",
    onClick: () => setBooking({})
  }, "+ Nouveau RDV"))), booking && window.LK_BookingModal && /*#__PURE__*/React.createElement(window.LK_BookingModal, {
    initial: booking,
    onClose: () => setBooking(null)
  }), finish && /*#__PURE__*/React.createElement(FinishModal, {
    appt: finish,
    onClose: () => setFinish(null)
  }), sel.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 18px',
      marginBottom: 10,
      background: 'var(--color-indigo)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-ivoire)'
    }
  }, sel.length, " s\xE9lectionn\xE9", sel.length > 1 ? 's' : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => bulk('Rappel WhatsApp envoyé'),
    style: bulkBtn
  }, "\u2709 Rappel WhatsApp"), /*#__PURE__*/React.createElement("button", {
    onClick: () => bulk('Confirmés'),
    style: bulkBtn
  }, "\u2713 Confirmer"), /*#__PURE__*/React.createElement("button", {
    onClick: () => bulk('Maître réassigné'),
    style: bulkBtn
  }, "\u21BB R\xE9assigner"), /*#__PURE__*/React.createElement("button", {
    onClick: () => bulk('Annulés'),
    style: {
      ...bulkBtn,
      color: 'var(--color-copper)'
    }
  }, "\u2715 Annuler"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setSel([]),
    style: {
      ...bulkBtn,
      opacity: 0.6
    }
  }, "D\xE9s\xE9lectionner")), bulkDone && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      marginBottom: 10,
      background: 'var(--copper-50)',
      border: '1px solid var(--color-copper)',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--copper-700)'
    }
  }, "\u2713 ", bulkDone), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '38px 130px 70px 1.2fr 1.5fr 0.9fr 0.9fr 70px',
      padding: '13px 22px',
      background: 'var(--color-indigo)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: allOn,
    onChange: toggleAll,
    style: {
      width: 16,
      height: 16,
      accentColor: 'var(--color-copper)',
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("span", null, "Date"), /*#__PURE__*/React.createElement("span", null, "Heure"), /*#__PURE__*/React.createElement("span", null, "Cliente"), /*#__PURE__*/React.createElement("span", null, "Service"), /*#__PURE__*/React.createElement("span", null, "Ma\xEEtre"), /*#__PURE__*/React.createElement("span", null, "Statut"), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 22px 4px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--color-indigo)',
      fontWeight: 600
    }
  }, "Rendez-vous \xE0 venir (", upcoming.length, ")"), upcoming.map(r => /*#__PURE__*/React.createElement(ApptRow, {
    key: r.id,
    r: r
  })), past.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px 4px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      fontWeight: 600,
      borderTop: '2px solid var(--color-copper)'
    }
  }, "Rendez-vous pass\xE9s (", past.length, ")"), past.map(r => /*#__PURE__*/React.createElement(ApptRow, {
    key: r.id,
    r: r
  }))));
}
const bulkBtn = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  letterSpacing: '0.04em',
  color: 'var(--color-ivoire)'
};
function BookingPanel({
  onClose
}) {
  const [svc, setSvc] = React.useState(L.services[1]);
  const [done, setDone] = React.useState(false);
  const isInstall = svc.cat === 'Installation';
  return /*#__PURE__*/React.createElement(Card, {
    padding: 26,
    style: {
      marginBottom: 22,
      border: '1px solid var(--color-copper)'
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-copper)',
      fontSize: 20
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)'
    }
  }, "Rendez-vous cr\xE9\xE9 \xB7 rappel WhatsApp programm\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, svc.nom, " \xB7 ", isInstall ? `${svc.sessions} sessions réservées automatiquement` : 'session unique')), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: onClose
  }, "Fermer")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-indigo)'
    }
  }, "Nouveau rendez-vous"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 16,
      color: 'var(--ink-soft)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, "Service"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 18
    }
  }, L.services.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => setSvc(s),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '8px 13px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid ' + (svc.id === s.id ? 'var(--color-indigo)' : 'var(--hairline)'),
      background: svc.id === s.id ? 'var(--color-indigo)' : 'transparent',
      color: svc.id === s.id ? 'var(--color-ivoire)' : 'var(--ink-soft)'
    }
  }, s.nom))), isInstall && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--copper-50)',
      border: '1px solid var(--copper-100)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 16px',
      marginBottom: 18,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--copper-700)'
    }
  }, "\u2B21 Installation multi-jours \u2014 LOKAA r\xE9servera automatiquement ", /*#__PURE__*/React.createElement("strong", null, svc.sessions, " sessions cons\xE9cutives"), " (", svc.duree, ")."), /*#__PURE__*/React.createElement(Button, {
    variant: "copper",
    onClick: () => setDone(true)
  }, "Confirmer & programmer rappels")));
}

/* ---------- CLIENTS / LOC PASSPORT ---------- */
function Clients() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => L.onClients(force), []);
  const [tab, setTab] = React.useState('liste');
  const [selId, setSelId] = React.useState(L.clients[0].id);
  const [form, setForm] = React.useState(null); // null | {} (new) | client (edit)
  const [tagFilter, setTagFilter] = React.useState(null);
  const [query, setQuery] = React.useState('');
  const sel = L.clients.find(c => c.id === selId) || L.clients[0];
  const base = tagFilter ? L.clients.filter(c => (c.tags || []).includes(tagFilter)) : L.clients;
  const list = query.trim() ? base.filter(c => (c.nom + ' ' + (c.loc_type || '') + ' ' + (c.ville || '') + ' ' + (c.tel || '')).toLowerCase().includes(query.trim().toLowerCase())) : base;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Title, {
    k: "CRM \xB7 le passeport loc"
  }, "Customers."), /*#__PURE__*/React.createElement(Button, {
    variant: "copper",
    onClick: () => setForm({})
  }, "+ Nouveau client")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--hairline)',
      margin: '4px 0 22px'
    }
  }, [['liste', 'Fiches clients'], ['carte', 'Localisations']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 13px',
      marginRight: 26,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: tab === id ? 'var(--color-indigo)' : 'var(--ink-soft)',
      borderBottom: '2px solid ' + (tab === id ? 'var(--color-copper)' : 'transparent'),
      marginBottom: -1
    }
  }, l))), form !== null && /*#__PURE__*/React.createElement(ClientForm, {
    client: form.id ? form : null,
    onClose: () => setForm(null),
    onSaved: id => {
      setForm(null);
      setSelId(id);
      setTab('liste');
    }
  }), tab === 'carte' ? /*#__PURE__*/React.createElement(Localisations, {
    onPick: id => {
      setSelId(id);
      setTab('liste');
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Rechercher un client\u2026",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '11px 14px',
      marginBottom: 12,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--hairline)',
      background: 'var(--color-ivoire)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--color-indigo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTagFilter(null),
    style: tagChip(!tagFilter)
  }, "Tous \xB7 ", L.clients.length), L.allTags().map(t => /*#__PURE__*/React.createElement("button", {
    key: t.tag,
    onClick: () => setTagFilter(t.tag),
    style: tagChip(tagFilter === t.tag)
  }, t.tag, " \xB7 ", t.count))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, list.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setSelId(c.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textAlign: 'left',
      cursor: 'pointer',
      padding: '12px 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (sel.id === c.id ? 'var(--color-copper)' : 'var(--hairline)'),
      background: sel.id === c.id ? 'var(--color-ivoire)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${c.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, c.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, c.loc_type, " \xB7 ", c.ville)))))), /*#__PURE__*/React.createElement(LocPassport, {
    c: sel,
    onEdit: () => setForm(sel)
  })));
}
const tagChip = on => ({
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  padding: '5px 11px',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  border: '1px solid ' + (on ? 'var(--color-copper)' : 'var(--hairline)'),
  background: on ? 'var(--color-indigo)' : 'transparent',
  color: on ? 'var(--color-ivoire)' : 'var(--ink-soft)'
});

/* ---------- LOCALISATIONS ---------- */
function Localisations({
  onPick
}) {
  const countries = L.byCountry();
  const maxCity = Math.max(...countries.flatMap(co => co.villes.map(v => v.count)), 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 26
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 21,
      color: 'var(--color-indigo)',
      margin: '0 0 4px'
    }
  }, "Client\xE8le par pays & ville"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      margin: '0 0 22px'
    }
  }, L.clients.length, " clientes \xB7 ", countries.length, " pays \xB7 ", countries.reduce((s, co) => s + co.villes.length, 0), " villes"), countries.map((co, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '2px solid var(--color-indigo)',
      paddingBottom: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-indigo)'
    }
  }, co.pays), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, co.count, " cliente", co.count > 1 ? 's' : '', " \xB7 ", co.villes.length, " ville", co.villes.length > 1 ? 's' : '')), co.villes.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 0 12px 14px',
      borderLeft: '2px solid var(--color-sable)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, l.ville), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-copper)'
    }
  }, l.count)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: 'var(--hairline)',
      borderRadius: 3,
      overflow: 'hidden',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: l.count / maxCity * 100 + '%',
      height: '100%',
      background: 'var(--color-copper)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, l.clients.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => onPick(c.id),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px 3px 3px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--hairline)',
      background: 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${c.photo})`,
      backgroundSize: 'cover'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink)'
    }
  }, c.nom))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "deep",
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      marginBottom: 12
    }
  }, "Par pays"), countries.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '9px 0',
      borderTop: i ? '1px solid var(--hairline-invert)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--color-ivoire)'
    }
  }, c.pays, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--indigo-200)'
    }
  }, "\xB7 ", c.villes.length, " ville", c.villes.length > 1 ? 's' : '')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-copper)'
    }
  }, c.count)))), /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, "Tags les plus fr\xE9quents"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7
    }
  }, L.allTags().map(t => /*#__PURE__*/React.createElement("span", {
    key: t.tag,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--color-indigo)',
      background: 'var(--color-sable)',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, t.tag, " \xB7 ", t.count))))));
}
function ClientForm({
  client,
  onClose,
  onSaved
}) {
  const isEdit = !!client;
  const [f, setF] = React.useState(() => client ? {
    ...client
  } : {
    nom: '',
    tel: '',
    email: '',
    ville: '',
    pays: '',
    dob: '',
    loc_type: 'Sans locks (projet)',
    tags: []
  });
  const [tagInput, setTagInput] = React.useState('');
  const fld = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 300,
    color: 'var(--ink)',
    border: 'none',
    borderBottom: '1px solid var(--hairline)',
    background: 'transparent',
    padding: '8px 2px',
    outline: 'none',
    width: '100%'
  };
  const lbl = {
    fontFamily: 'var(--font-sans)',
    fontSize: 10,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    display: 'block',
    marginBottom: 4
  };
  const set = (k, v) => setF(p => ({
    ...p,
    [k]: v
  }));
  const addTag = () => {
    const t = tagInput.trim();
    if (t && !(f.tags || []).includes(t)) {
      set('tags', [...(f.tags || []), t]);
      setTagInput('');
    }
  };
  const save = () => {
    if (isEdit) {
      L.updateClient(client.id, f);
      onSaved(client.id);
    } else {
      const id = L.addClient(f);
      onSaved(id);
    }
  };
  return /*#__PURE__*/React.createElement(Card, {
    padding: 26,
    style: {
      marginBottom: 18,
      border: '1px solid var(--color-copper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-indigo)'
    }
  }, isEdit ? 'Modifier · ' + client.nom : 'Nouveau client'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 16,
      color: 'var(--ink-soft)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Nom complet"), /*#__PURE__*/React.createElement("input", {
    style: fld,
    value: f.nom,
    onChange: e => set('nom', e.target.value),
    placeholder: "Pr\xE9nom Nom"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "T\xE9l\xE9phone / WhatsApp"), /*#__PURE__*/React.createElement("input", {
    style: fld,
    value: f.tel,
    onChange: e => set('tel', e.target.value),
    placeholder: "+229 \u2026"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    style: fld,
    value: f.email,
    onChange: e => set('email', e.target.value),
    placeholder: "email@\u2026"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Ville"), /*#__PURE__*/React.createElement("input", {
    style: fld,
    value: f.ville,
    onChange: e => set('ville', e.target.value),
    placeholder: "Cotonou"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Pays"), /*#__PURE__*/React.createElement("input", {
    style: fld,
    value: f.pays,
    onChange: e => set('pays', e.target.value),
    placeholder: "B\xE9nin"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Date de naissance"), /*#__PURE__*/React.createElement("input", {
    style: fld,
    type: "date",
    value: f.dob || '',
    onChange: e => set('dob', e.target.value)
  }), f.dob && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: 'var(--color-copper)',
      marginTop: 4
    }
  }, L.frDate(f.dob))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Type de lock"), /*#__PURE__*/React.createElement("select", {
    style: fld,
    value: f.loc_type,
    onChange: e => set('loc_type', e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "Sans locks (projet)"), /*#__PURE__*/React.createElement("option", null, "Microlocks"), /*#__PURE__*/React.createElement("option", null, "Locks fines"), /*#__PURE__*/React.createElement("option", null, "Locks moyennes"), /*#__PURE__*/React.createElement("option", null, "Locks larges"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Tags"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: fld,
    value: tagInput,
    onChange: e => setTagInput(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addTag();
      }
    },
    placeholder: "VIP, Diaspora\u2026"
  }), /*#__PURE__*/React.createElement("button", {
    onClick: addTag,
    style: {
      background: 'var(--color-indigo)',
      color: 'var(--color-ivoire)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '0 14px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 18
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 8
    }
  }, (f.tags || []).map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    onClick: () => set('tags', f.tags.filter(x => x !== t)),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--color-indigo)',
      background: 'var(--color-sable)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, t, " \u2715"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "copper",
    onClick: save
  }, isEdit ? 'Enregistrer les modifications' : 'Créer la fiche client'), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Annuler")));
}
function LocPhotos({
  c
}) {
  const milestones = L.photoSchedule(c.id);
  const seed = [{
    url: '../../assets/photos/portrait-3.jpg',
    label: 'Création',
    date: L.frDate(c.install)
  }, {
    url: '../../assets/photos/model-microlocks.jpg',
    label: '2 mois',
    date: ''
  }, {
    url: '../../assets/photos/portrait-1.jpg',
    label: '6 mois',
    date: ''
  }];
  const [shots, setShots] = React.useState(seed);
  const fileRef = React.useRef(null);
  const onPick = e => {
    const files = Array.from(e.target.files || []);
    const added = files.map(f => ({
      url: URL.createObjectURL(f),
      label: 'Nouveau',
      date: L.frDate(new Date().toISOString().slice(0, 10))
    }));
    if (added.length) setShots(s => [...s, ...added]);
    e.target.value = '';
  };
  const next = L.nextPhotoDue(c.id);
  return /*#__PURE__*/React.createElement(Card, {
    padding: 22,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 19,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "Suivi photo des locks"), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*,video/*",
    multiple: true,
    style: {
      display: 'none'
    },
    onChange: onPick
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "copper",
    onClick: () => fileRef.current && fileRef.current.click()
  }, "+ T\xE9l\xE9verser photo / vid\xE9o")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, milestones.map(m => {
    const tone = m.status === 'fait' ? {
      bg: 'var(--color-indigo)',
      fg: 'var(--color-ivoire)',
      b: 'var(--color-indigo)'
    } : m.status === 'dû' ? {
      bg: 'var(--copper-50)',
      fg: 'var(--copper-700)',
      b: 'var(--color-copper)'
    } : {
      bg: 'transparent',
      fg: 'var(--ink-soft)',
      b: 'var(--hairline)'
    };
    return /*#__PURE__*/React.createElement("div", {
      key: m.key,
      style: {
        flex: '1 1 0',
        minWidth: 92,
        textAlign: 'center',
        padding: '9px 6px',
        borderRadius: 'var(--radius-sm)',
        background: tone.bg,
        border: '1px solid ' + tone.b
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 500,
        color: tone.fg
      }
    }, m.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 9,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: tone.fg,
        opacity: 0.8,
        marginTop: 3
      }
    }, m.status === 'fait' ? '✓ fait' : m.status === 'dû' ? '◐ à faire' : 'à venir'));
  })), next && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      background: 'var(--copper-50)',
      border: '1px solid var(--copper-100)',
      borderRadius: 'var(--radius-sm)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-copper)',
      fontSize: 15
    }
  }, "\u25D0"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--copper-700)'
    }
  }, "Photo de suivi ", /*#__PURE__*/React.createElement("strong", null, next.label), " \xE0 prendre au prochain rendez-vous (automatisation active).")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10
    }
  }, shots.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      aspectRatio: '3/4',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g.url,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 22%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(20,20,27,0.7), rgba(20,20,27,0) 55%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 7,
      bottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: i === shots.length - 1 ? 'var(--color-copper)' : 'var(--color-ivoire)'
    }
  }, g.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      color: 'rgba(246,241,231,0.7)'
    }
  }, g.date))))));
}

/* ---------- LOC TIMELINE · éditable + prédiction prochaine visite ---------- */
function LocTimeline({
  c
}) {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => L.onClients(force), []);
  const [editIdx, setEditIdx] = React.useState(null);
  const [ed, setEd] = React.useState({
    d: '',
    t: '',
    kind: 'soin'
  });
  const tl = c.timeline || [];
  const pred = L.predictNextVisit(c.id);
  const KINDS = [['start', 'Démarrage'], ['soin', 'Soin'], ['event', 'Événement']];
  const startEdit = i => {
    setEditIdx(i);
    setEd({
      ...tl[i]
    });
  };
  const save = () => {
    const next = tl.map((x, k) => k === editIdx ? {
      ...ed
    } : x);
    L.updateClient(c.id, {
      timeline: next
    });
    setEditIdx(null);
  };
  const del = i => {
    if (confirm('Supprimer cet événement ?')) L.updateClient(c.id, {
      timeline: tl.filter((_, k) => k !== i)
    });
  };
  const add = () => {
    const next = [...tl, {
      d: '27 juin 2026',
      t: 'Nouvel événement',
      kind: 'soin'
    }];
    L.updateClient(c.id, {
      timeline: next
    });
    setEditIdx(next.length - 1);
    setEd(next[next.length - 1]);
  };
  const fi = {
    fontFamily: 'var(--font-sans)',
    fontSize: 13,
    color: 'var(--color-indigo)',
    border: 'none',
    borderBottom: '1px solid var(--color-copper)',
    background: 'transparent',
    padding: '4px 0',
    outline: 'none',
    width: '100%'
  };
  return /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 19,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "Timeline \xB7 m\xE8che apr\xE8s m\xE8che"), /*#__PURE__*/React.createElement("button", {
    onClick: add,
    style: {
      background: 'none',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--color-copper)',
      cursor: 'pointer'
    }
  }, "+ \xC9v\xE9nement")), pred && /*#__PURE__*/React.createElement("div", {
    style: {
      background: pred.overdue ? 'var(--copper-50)' : 'var(--color-sable)',
      border: '1px solid ' + (pred.overdue ? 'var(--color-copper)' : 'var(--hairline)'),
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      marginBottom: 4
    }
  }, "Prochaine visite pr\xE9vue"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      color: 'var(--color-indigo)'
    }
  }, pred.predictedFr), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12,
      color: 'var(--ink-soft)',
      marginTop: 3
    }
  }, "Cadence moyenne ~", pred.avgGap, " j (sur ", pred.visits, " visites)", pred.overdue ? ` · en retard de ${pred.overdueDays} j — relancer` : ` · dernier écart ${pred.lastGap} j`, ".")), tl.map((j, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: KIND_C[j.kind] || 'var(--color-indigo)',
      marginTop: 6,
      flex: '0 0 auto'
    }
  }), i < tl.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      flex: 1,
      background: 'var(--hairline)',
      minHeight: 22
    }
  })), editIdx === i ? /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 14,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: fi,
    value: ed.d,
    onChange: e => setEd({
      ...ed,
      d: e.target.value
    }),
    placeholder: "12 juin 2025"
  }), /*#__PURE__*/React.createElement("input", {
    style: {
      ...fi,
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      marginTop: 4
    },
    value: ed.t,
    onChange: e => setEd({
      ...ed,
      t: e.target.value
    }),
    placeholder: "\xC9v\xE9nement"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, KINDS.map(([k, lab]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setEd({
      ...ed,
      kind: k
    }),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (ed.kind === k ? 'var(--color-copper)' : 'var(--hairline)'),
      background: ed.kind === k ? 'var(--color-ivoire)' : 'transparent',
      color: 'var(--ink)'
    }
  }, lab)), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    style: {
      marginLeft: 'auto',
      background: 'var(--color-copper)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      cursor: 'pointer'
    }
  }, "OK"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditIdx(null),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ink-soft)',
      fontSize: 12,
      cursor: 'pointer'
    }
  }, "Annuler"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 14,
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => startEdit(i),
    title: "Cliquer pour modifier",
    style: {
      background: 'none',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      padding: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, j.d), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, j.t)), /*#__PURE__*/React.createElement("button", {
    onClick: () => del(i),
    title: "Supprimer",
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ink-soft)',
      fontSize: 13,
      cursor: 'pointer',
      opacity: 0.6
    }
  }, "\u2715")))));
}
function LocPassport({
  c,
  onEdit
}) {
  const pers = P[c.persona];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 70,
      height: 70,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${c.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '2px solid var(--color-copper)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 32,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, c.nom), /*#__PURE__*/React.createElement(Badge, {
    tone: "copper",
    size: "sm"
  }, c.tier), pers && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      background: pers.couleur + '18',
      border: '1px solid ' + pers.couleur + '44',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: pers.couleur
    }
  }, pers.emoji, " ", pers.nom)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 4
    }
  }, c.tel, " \xB7 ", c.ville, c.pays ? ', ' + c.pays : '', " \xB7 cliente depuis ", c.depuis), !!(c.tags && c.tags.length) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 8
    }
  }, c.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.06em',
      color: 'var(--color-copper)',
      background: 'var(--copper-50)',
      border: '1px solid var(--copper-100)',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "copper",
    onClick: onEdit
  }, "Modifier"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary"
  }, "WhatsApp"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (confirm('Supprimer définitivement la fiche de ' + sel.nom + ' ?')) L.removeClient(sel.id);
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)',
      padding: '4px 0'
    }
  }, "Supprimer la cliente"))), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 0
    }
  }, [['Email', c.email], ['Anniversaire', L.frDate(c.dob)], ['Âge', c.dob ? L.age(c.dob) + ' ans' : '—'], ['Installation locks', new Date(c.install).toLocaleDateString('fr-FR', {
    month: 'short',
    year: 'numeric'
  })], ['Points fidélité', c.points + ' pts']].map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '16px 18px',
      borderRight: i < 4 ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, k[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)',
      marginTop: 5,
      wordBreak: 'break-word'
    }
  }, k[1]))))), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-indigo)',
      padding: '14px 22px',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Passeport loc"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 0
    }
  }, [['Type', c.loc_type], ['Taille', c.loc_size], ['Densité', c.densite], ['Cuir chevelu', c.scalp]].map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '16px 20px',
      borderRight: i < 3 ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, k[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)',
      marginTop: 5
    }
  }, k[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "Maturit\xE9 \xB7 ", c.maturite), /*#__PURE__*/React.createElement("span", null, Math.round(c.maturite_pct * 100), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--hairline)',
      borderRadius: 3,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: c.maturite_pct * 100 + '%',
      height: '100%',
      background: 'linear-gradient(90deg, var(--copper-300), var(--color-copper))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      color: 'var(--ink-soft)',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Starter"), /*#__PURE__*/React.createElement("span", null, "Budding"), /*#__PURE__*/React.createElement("span", null, "Teen"), /*#__PURE__*/React.createElement("span", null, "Mature"), /*#__PURE__*/React.createElement("span", null, "Rooted")))), /*#__PURE__*/React.createElement(LocPhotos, {
    c: c
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(LocTimeline, {
    c: c
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: "sable",
    hairline: false,
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 8
    }
  }, "Allergies / sensibilit\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)'
    }
  }, c.allergies)), (() => {
    const auto = L.autoDiscountFor(c.nom);
    const subs = L.activeSubs.filter(s => s.client === c.nom);
    const ref = L.referrals.find(r => r.parrain === c.nom);
    return /*#__PURE__*/React.createElement(Card, {
      padding: 20
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 9.5,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: 10
      }
    }, "Adh\xE9sion & avantages"), /*#__PURE__*/React.createElement(RowLine, {
      k: "Niveau fid\xE9lit\xE9",
      v: c.tier
    }), /*#__PURE__*/React.createElement(RowLine, {
      k: "Points",
      v: c.points + ' pts'
    }), /*#__PURE__*/React.createElement(RowLine, {
      k: "Remise auto",
      v: auto ? `−${Math.round(auto.pct * 100)}% · ${auto.label}` : 'Aucune',
      copper: !!auto
    }), /*#__PURE__*/React.createElement(RowLine, {
      k: "Abonnement",
      v: subs.length ? subs[0].plan : 'Aucun'
    }), /*#__PURE__*/React.createElement(RowLine, {
      k: "Parrainage",
      v: ref ? `${ref.valides} filleul(s) · ${ref.ptsGagnes} pts` : 'Aucun',
      last: true
    }));
  })(), /*#__PURE__*/React.createElement(Card, {
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Valeur"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)',
      marginTop: 4
    }
  }, FCFA(c.ltv))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Visites"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)',
      marginTop: 4
    }
  }, c.visites)))), pers && /*#__PURE__*/React.createElement(Card, {
    surface: "deep",
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      marginBottom: 8
    }
  }, "Guide d'accueil \xB7 ", pers.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12.5,
      lineHeight: 1.6,
      color: 'var(--indigo-100)',
      fontStyle: 'italic'
    }
  }, pers.staff)))), /*#__PURE__*/React.createElement(Card, {
    padding: 22,
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 19,
      color: 'var(--color-indigo)',
      margin: '0 0 14px'
    }
  }, "Notes internes"), window.LK_NotesPanel ? /*#__PURE__*/React.createElement(window.LK_NotesPanel, {
    scope: "client",
    refId: c.id
  }) : null));
}
function RowLine({
  k,
  v,
  copper,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 0',
      borderBottom: last ? 'none' : '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: copper ? 'var(--color-copper)' : 'var(--color-indigo)'
    }
  }, v));
}

/* ---------- FINISH APPOINTMENT → INVOICE → PAYMENT ---------- */
function FinishModal({
  appt,
  onClose
}) {
  const c = L.clientById(appt.client),
    s = L.svcById(appt.svc);
  const [step, setStep] = React.useState(0); // 0 récap · 1 facture · 2 paiement · 3 terminé
  const [tip, setTip] = React.useState(0);
  const [method, setMethod] = React.useState('momo');
  const [partial, setPartial] = React.useState(false);
  const [amount, setAmount] = React.useState(s.prix);
  const [invId, setInvId] = React.useState(null);
  // editable line items — start with the booked service
  const [lines, setLines] = React.useState([{
    nom: s.nom,
    prix: s.prix,
    remise: 0
  }]);
  const [addOpen, setAddOpen] = React.useState(false);
  const setLine = (i, patch) => setLines(ls => ls.map((l, j) => j === i ? {
    ...l,
    ...patch
  } : l));
  const removeLine = i => setLines(ls => ls.filter((_, j) => j !== i));
  const addService = svc => {
    setLines(ls => [...ls, {
      nom: svc.nom,
      prix: svc.prix,
      remise: 0
    }]);
    setAddOpen(false);
  };
  const lineNet = l => Math.max(0, Math.round(l.prix * (1 - (l.remise || 0) / 100)));
  const base = lines.reduce((sum, l) => sum + lineNet(l), 0);
  const total = base + (tip || 0);
  const methods = [['momo', 'Mobile Money'], ['cash', 'Espèces'], ['card', 'Carte'], ['whatsapp', 'WhatsApp']];
  const createInvoice = () => {
    const items = [...lines.map(l => [l.nom + (l.remise ? ` (−${l.remise}%)` : ''), lineNet(l)]), ...(tip ? [['Pourboire', tip]] : [])];
    const id = L.addInvoice({
      client: c.nom,
      items,
      total,
      pourboire: tip
    });
    setInvId(id);
    setAmount(total);
    setStep(2);
  };
  const takePayment = () => {
    const pay = partial ? Math.min(amount, total) : total;
    L.recordPayment(invId, pay, method);
    L.addCash && L.addCash({
      label: s.nom,
      client: c.nom,
      amount: pay,
      method
    });
    if (appt.id) L.markApptDone(appt.id);
    setStep(3);
  };
  const markUnpaid = () => {
    if (appt.id) L.markApptDone(appt.id);
    setStep(4);
  };
  const Box = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(20,20,27,0.55)',
      zIndex: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--color-ivoire)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      width: 'min(540px, 96vw)',
      maxHeight: '90vh',
      overflowY: 'auto'
    }
  }, children));
  const Head = ({
    t,
    n
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 26px',
      borderBottom: '1px solid var(--hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "\xC9tape ", n, "/3 \xB7 ", c.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)',
      marginTop: 3
    }
  }, t)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 17,
      color: 'var(--ink-soft)'
    }
  }, "\u2715"));
  if (step === 0) return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Head, {
    t: "Terminer la prestation",
    n: 1
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, "Prestation r\xE9alis\xE9e"), /*#__PURE__*/React.createElement(Card, {
    padding: 18,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)'
    }
  }, s.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, s.duree, " \xB7 ", appt.stylist)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-copper)'
    }
  }, L.FCFA(base)))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "copper",
    onClick: () => setStep(1)
  }, "Prestation termin\xE9e \u2192 facturer")));
  if (step === 1) return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Head, {
    t: "Cr\xE9er la facture",
    n: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, "Lignes de la facture \xB7 modifiables"), lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, l.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, L.FCFA(lineNet(l))), lines.length > 1 && /*#__PURE__*/React.createElement("button", {
    onClick: () => removeLine(i),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-soft)',
      fontSize: 14
    }
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 4
    }
  }, "Prix"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: l.prix,
    onChange: e => setLine(i, {
      prix: Math.max(0, Number(e.target.value) || 0)
    }),
    style: {
      width: 110,
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)',
      padding: '6px 8px',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 4
    }
  }, "Remise %"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, [0, 10, 20, 50].map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setLine(i, {
      remise: r
    }),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      padding: '6px 9px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid ' + ((l.remise || 0) === r ? 'var(--color-copper)' : 'var(--hairline)'),
      background: (l.remise || 0) === r ? 'var(--color-indigo)' : 'transparent',
      color: (l.remise || 0) === r ? 'var(--color-ivoire)' : 'var(--ink-soft)'
    }
  }, r === 0 ? '—' : r + '%'))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, addOpen ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, L.services.filter(sv => sv.id !== s.id).map(sv => /*#__PURE__*/React.createElement("button", {
    key: sv.id,
    onClick: () => addService(sv),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '7px 11px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid var(--hairline)',
      background: 'transparent',
      color: 'var(--color-indigo)'
    }
  }, sv.nom, " \xB7 ", L.FCFA(sv.prix)))) : /*#__PURE__*/React.createElement("button", {
    onClick: () => setAddOpen(true),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--color-copper)',
      background: 'none',
      border: '1px dashed var(--color-copper)',
      borderRadius: 'var(--radius-sm)',
      padding: '9px 14px',
      cursor: 'pointer',
      width: '100%'
    }
  }, "+ Ajouter un service suppl\xE9mentaire")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, "Pourboire"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, [0, 1000, 2000, 5000].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTip(t),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '6px 11px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid ' + (tip === t ? 'var(--color-copper)' : 'var(--hairline)'),
      background: tip === t ? 'var(--color-indigo)' : 'transparent',
      color: tip === t ? 'var(--color-ivoire)' : 'var(--ink-soft)'
    }
  }, t === 0 ? 'Aucun' : L.FCFA(t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)'
    }
  }, "Montant libre :"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: tip,
    onChange: e => setTip(Math.max(0, Number(e.target.value) || 0)),
    style: {
      flex: 1,
      boxSizing: 'border-box',
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)',
      padding: '8px 10px',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: 'var(--color-copper)'
    }
  }, "F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '14px 0',
      borderTop: '2px solid var(--color-copper)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Total facture"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 28,
      color: 'var(--color-indigo)'
    }
  }, L.FCFA(total))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "copper",
    onClick: createInvoice
  }, "\xC9mettre la facture \u2192 encaisser"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    onClick: () => {
      const items = [...lines.map(l => [l.nom + (l.remise ? ` (−${l.remise}%)` : ''), lineNet(l)]), ...(tip ? [['Pourboire', tip]] : [])];
      const id = L.addInvoice({
        client: c.nom,
        items,
        total,
        pourboire: tip
      });
      setInvId(id);
      markUnpaid();
    }
  }, "Terminer & laisser impay\xE9")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)',
      textAlign: 'center'
    }
  }, "La facture impay\xE9e se retrouve dans Factures \u2192 filtre Impay\xE9es.")));
  if (step === 2) return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Head, {
    t: "Encaisser",
    n: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, "Mode de paiement"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 18
    }
  }, methods.map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setMethod(id),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      padding: '9px 14px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid ' + (method === id ? 'var(--color-copper)' : 'var(--hairline)'),
      background: method === id ? 'var(--color-indigo)' : 'transparent',
      color: method === id ? 'var(--color-ivoire)' : 'var(--ink-soft)'
    }
  }, l))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      cursor: 'pointer',
      marginBottom: partial ? 12 : 18
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: partial,
    onChange: e => {
      setPartial(e.target.checked);
      setAmount(e.target.checked ? Math.round(total / 2) : total);
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, "Versement partiel / acompte")), partial && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 8
    }
  }, [['½', Math.round(total / 2)], ['⅓', Math.round(total / 3)], ['Solde', total]].map(([lbl, v]) => /*#__PURE__*/React.createElement("button", {
    key: lbl,
    onClick: () => setAmount(v),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid var(--hairline)',
      background: amount === v ? 'var(--copper-50)' : 'transparent',
      color: 'var(--color-indigo)'
    }
  }, lbl))), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: amount,
    onChange: e => setAmount(Number(e.target.value)),
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)',
      padding: '10px 12px',
      border: '1px solid var(--color-copper)',
      borderRadius: 'var(--radius-sm)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, partial ? 'À encaisser maintenant' : 'Montant total'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 26,
      color: 'var(--color-indigo)'
    }
  }, L.FCFA(partial ? amount : total))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "copper",
    onClick: takePayment
  }, "Encaisser ", L.FCFA(partial ? amount : total))));
  if (step === 4) return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Head, {
    t: "Termin\xE9 \xB7 impay\xE9",
    n: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 26px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--copper-50)',
      border: '1px solid var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-copper)',
      fontSize: 26,
      margin: '0 auto 16px'
    }
  }, "\u25F7"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)'
    }
  }, "Prestation termin\xE9e \xB7 facture impay\xE9e"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 6
    }
  }, "Facture ", invId, " \xB7 ", L.FCFA(total), " d\xFB. Le RDV passe en ", /*#__PURE__*/React.createElement("strong", null, "Termin\xE9"), " (rendez-vous pass\xE9s) et la facture est dans ", /*#__PURE__*/React.createElement("strong", null, "Factures \u2192 Impay\xE9es"), " jusqu'au r\xE8glement."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Fermer"))));
  const reste = partial ? total - amount : 0;
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Head, {
    t: "Encaiss\xE9",
    n: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 26px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-copper)',
      fontSize: 26,
      margin: '0 auto 16px'
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)'
    }
  }, "Prestation cl\xF4tur\xE9e & encaiss\xE9e"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 6
    }
  }, "Facture ", invId, " \xB7 ", L.FCFA(partial ? amount : total), " re\xE7us", reste > 0 ? ` · reste ${L.FCFA(reste)} dû (Partielle)` : ' · Payée', ". Ajout\xE9 au journal de caisse."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Fermer"))));
}
Object.assign(window, {
  LK_Dashboard: Dashboard,
  LK_Appointments: Appointments,
  LK_Clients: Clients,
  LK_FinishModal: FinishModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensB.jsx
try { (() => {
/* LOKAA Phase 1 — Screens B: POS, Inventory, Finance */
const {
  Button: LBtn,
  Badge: LBadge,
  Card: LCard,
  Filet: LFilet,
  Eyebrow: LEye
} = window.MNDDesignSystem_a962de;
const LK = window.LOKAA;
const F = LK.FCFA;
function LTitle({
  k,
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LEye, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, children)), right);
}

/* ---------- POS ---------- */
const PAY_METHODS = [{
  id: 'momo',
  label: 'Mobile Money',
  sub: 'MTN · Moov'
}, {
  id: 'cash',
  label: 'Espèces',
  sub: 'Caisse'
}, {
  id: 'card',
  label: 'Carte',
  sub: 'Visa · MC'
}, {
  id: 'whatsapp',
  label: 'WhatsApp',
  sub: 'Commande à distance'
}];
function POS({
  prefill
}) {
  const [cart, setCart] = React.useState(() => {
    if (prefill && prefill.svc) return [{
      kind: 'svc',
      id: prefill.svc,
      qty: 1,
      disc: 0
    }];
    return [{
      kind: 'svc',
      id: 's-resser-micro',
      qty: 1,
      disc: 0
    }];
  });
  const [method, setMethod] = React.useState('momo');
  const [paid, setPaid] = React.useState(false);
  const [clientNom, setClientNom] = React.useState(prefill && prefill.client || 'Walk-in');
  const [globalDisc, setGlobalDisc] = React.useState(0);
  const [partial, setPartial] = React.useState(false);
  const [partAmt, setPartAmt] = React.useState(0);
  const add = (kind, id) => setCart(c => {
    const ex = c.find(x => x.kind === kind && x.id === id);
    if (ex) return c.map(x => x === ex ? {
      ...x,
      qty: x.qty + 1
    } : x);
    return [...c, {
      kind,
      id,
      qty: 1,
      disc: 0
    }];
  });
  const setQty = (item, q) => setCart(c => q <= 0 ? c.filter(x => x !== item) : c.map(x => x === item ? {
    ...x,
    qty: q
  } : x));
  const setLineDisc = (item, d) => setCart(c => c.map(x => x === item ? {
    ...x,
    disc: Math.max(0, Math.min(100, d))
  } : x));
  const auto = LK.autoDiscountFor(clientNom); // remise auto adhérent
  const lines = cart.map(it => {
    const ref = it.kind === 'svc' ? LK.svcById(it.id) : LK.products.find(p => p.id === it.id);
    const gross = (ref?.prix || 0) * it.qty;
    const lineNet = gross * (1 - (it.disc || 0) / 100);
    return {
      it,
      ref,
      gross,
      lineNet
    };
  });
  const subtotal = lines.reduce((s, l) => s + l.lineNet, 0);
  // remise auto adhérent (sur soins ou tout selon scope)
  const autoBase = auto ? lines.reduce((s, l) => s + (auto.scope === 'soins' ? l.it.kind === 'svc' ? l.lineNet : 0 : l.lineNet), 0) : 0;
  const autoAmt = auto ? Math.round(autoBase * auto.pct) : 0;
  const afterAuto = subtotal - autoAmt;
  const globalAmt = Math.round(afterAuto * (globalDisc / 100));
  const net = afterAuto - globalAmt;
  const CLIENT_OPTS = ['Walk-in', ...LK.clients.map(c => c.nom)];
  const [posTab, setPosTab] = React.useState('encaisser');
  const [, forcePos] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LK.onData(forcePos), []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LTitle, {
    k: prefill && prefill.client ? `Service terminé · ${prefill.client}` : 'Point de vente · encaissement'
  }, "Caisse."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--hairline)',
      marginBottom: 22
    }
  }, [['encaisser', 'Encaisser'], ['journal', 'Journal de caisse']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setPosTab(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 13px',
      marginRight: 26,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: posTab === id ? 'var(--color-indigo)' : 'var(--ink-soft)',
      borderBottom: '2px solid ' + (posTab === id ? 'var(--color-copper)' : 'transparent'),
      marginBottom: -1
    }
  }, l))), posTab === 'journal' ? window.LK_CashJournal ? React.createElement(window.LK_CashJournal) : null : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Services"), (() => {
    const cats = LK.getServiceCategories ? LK.getServiceCategories() : [];
    const svcs = LK.services;
    const groups = cats.length ? cats.map(cat => ({
      cat,
      items: svcs.filter(s => s.cat === cat)
    })) : [{
      cat: null,
      items: svcs
    }];
    const ungrouped = svcs.filter(s => !cats.includes(s.cat));
    if (cats.length && ungrouped.length) groups.push({
      cat: 'Autres',
      items: ungrouped
    });
    return groups.filter(g => g.items.length).map(g => /*#__PURE__*/React.createElement("div", {
      key: g.cat || 'all',
      style: {
        marginBottom: 16
      }
    }, g.cat && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--color-copper)',
        marginBottom: 6
      }
    }, g.cat), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 10
      }
    }, g.items.map(s => /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => add('svc', s.id),
      style: posBtn
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 16,
        color: 'var(--color-indigo)'
      }
    }, s.nom), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--ink-soft)'
      }
    }, F(s.prix)))))));
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      margin: '8px 0 12px'
    }
  }, "Produits"), (() => {
    const cats = LK.getProductCategories ? LK.getProductCategories() : [];
    const prods = LK.products;
    const groups = cats.length ? cats.map(cat => ({
      cat,
      items: prods.filter(p => p.cat === cat)
    })) : [{
      cat: null,
      items: prods
    }];
    const ungrouped = prods.filter(p => !cats.includes(p.cat));
    if (cats.length && ungrouped.length) groups.push({
      cat: 'Autres',
      items: ungrouped
    });
    return groups.filter(g => g.items.length).map(g => /*#__PURE__*/React.createElement("div", {
      key: g.cat || 'all',
      style: {
        marginBottom: 14
      }
    }, g.cat && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--color-copper)',
        marginBottom: 6
      }
    }, g.cat), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 10
      }
    }, g.items.map(p => /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: () => add('prod', p.id),
      style: posBtn
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 15,
        color: 'var(--color-indigo)'
      }
    }, p.nom), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)'
      }
    }, F(p.prix)))))));
  })()), /*#__PURE__*/React.createElement(LCard, {
    padding: 0,
    style: {
      overflow: 'hidden',
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-indigo)',
      padding: '16px 22px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-ivoire)'
    }
  }, "Ticket"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/monograms/mono-copper.png",
    style: {
      width: 24
    },
    alt: ""
  })), paid ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      color: 'var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      fontSize: 26
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 26,
      color: 'var(--color-indigo)'
    }
  }, partial ? 'Acompte encaissé' : 'Encaissé', " \xB7 ", F(partial ? partAmt : net)), partial && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--color-copper)',
      marginTop: 4
    }
  }, "Reste \xE0 r\xE9gler \xB7 ", F(Math.max(0, Math.round(net) - partAmt)), " \u2192 suivi dans Factures impay\xE9es"), autoAmt + globalAmt > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--accent-strong)',
      marginTop: 4
    }
  }, "Remise totale \xB7 ", F(autoAmt + globalAmt + lines.reduce((s, l) => s + (l.gross - l.lineNet), 0))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 6
    }
  }, PAY_METHODS.find(m => m.id === method).label, " \xB7 stock d\xE9duit automatiquement"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(LBtn, {
    variant: "secondary",
    onClick: () => {
      setPaid(false);
      setCart([]);
      setGlobalDisc(0);
      setPartial(false);
    }
  }, "Nouveau ticket"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 22px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 0 12px',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Cliente"), /*#__PURE__*/React.createElement("select", {
    value: clientNom,
    onChange: e => setClientNom(e.target.value),
    style: {
      flex: 1,
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-ivoire)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)',
      padding: '7px 9px',
      outline: 'none'
    }
  }, CLIENT_OPTS.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c
  }, c)))), auto && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 12px',
      margin: '12px 0',
      background: 'var(--copper-50)',
      border: '1px solid var(--copper-100)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-copper)'
    }
  }, "\u2605"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      color: 'var(--copper-700)'
    }
  }, "Remise ", auto.label, " \xB7 \u2212", Math.round(auto.pct * 100), "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      color: 'var(--ink-soft)'
    }
  }, "Appliqu\xE9e automatiquement ", auto.scope === 'soins' ? 'sur les soins' : 'sur tout le ticket')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-copper)'
    }
  }, "\u2212", F(autoAmt))), lines.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 0',
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, "Ticket vide"), lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, l.ref?.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, F(l.ref?.prix || 0), l.it.kind === 'svc' ? ' · service' : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(l.it, l.it.qty - 1),
    style: qBtn
  }, "\u2013"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 13
    }
  }, l.it.qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(l.it, l.it.qty + 1),
    style: qBtn
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)'
    }
  }, F(Math.round(l.lineNet))), l.it.disc > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      color: 'var(--ink-soft)',
      textDecoration: 'line-through'
    }
  }, F(l.gross)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Remise ligne"), [0, 5, 10, 15, 20].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setLineDisc(l.it, d),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      padding: '3px 8px',
      borderRadius: 999,
      cursor: 'pointer',
      border: '1px solid ' + (l.it.disc === d ? 'var(--color-copper)' : 'var(--hairline)'),
      background: l.it.disc === d ? 'var(--color-copper)' : 'transparent',
      color: l.it.disc === d ? '#fff' : 'var(--ink-soft)'
    }
  }, d === 0 ? '0' : '−' + d + '%'))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      margin: '14px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Remise globale facture"), [0, 5, 10, 15].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setGlobalDisc(d),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      padding: '4px 9px',
      borderRadius: 999,
      cursor: 'pointer',
      border: '1px solid ' + (globalDisc === d ? 'var(--color-indigo)' : 'var(--hairline)'),
      background: globalDisc === d ? 'var(--color-indigo)' : 'transparent',
      color: globalDisc === d ? '#fff' : 'var(--ink-soft)'
    }
  }, d === 0 ? '0' : '−' + d + '%'))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--hairline)',
      paddingTop: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "Sous-total",
    v: F(Math.round(subtotal))
  }), autoAmt > 0 && /*#__PURE__*/React.createElement(Row, {
    k: `Remise ${auto.label}`,
    v: '−' + F(autoAmt),
    copper: true
  }), globalAmt > 0 && /*#__PURE__*/React.createElement(Row, {
    k: `Remise globale −${globalDisc}%`,
    v: '−' + F(globalAmt),
    copper: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      margin: '8px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Net \xE0 payer"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 30,
      color: 'var(--color-indigo)'
    }
  }, F(Math.round(net)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 8
    }
  }, "Paiement"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 7,
      marginBottom: 16
    }
  }, PAY_METHODS.map(m => /*#__PURE__*/React.createElement("button", {
    key: m.id,
    onClick: () => setMethod(m.id),
    style: {
      textAlign: 'left',
      padding: '9px 12px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid ' + (method === m.id ? 'var(--color-copper)' : 'var(--hairline)'),
      background: method === m.id ? 'var(--copper-50)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      color: 'var(--color-indigo)'
    }
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      color: 'var(--ink-soft)'
    }
  }, m.sub)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      margin: '4px 0 12px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setPartial(!partial);
      setPartAmt(Math.round(net / 2));
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      padding: '5px 11px',
      borderRadius: 999,
      cursor: 'pointer',
      border: '1px solid ' + (partial ? 'var(--color-copper)' : 'var(--hairline)'),
      background: partial ? 'var(--copper-50)' : 'transparent',
      color: partial ? 'var(--color-copper)' : 'var(--ink-soft)'
    }
  }, partial ? '✓ ' : '', "Versement partiel"), partial && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, "reste ", F(Math.max(0, Math.round(net) - partAmt)))), partial && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: partAmt,
    onChange: e => setPartAmt(Math.max(0, Math.min(Math.round(net), +e.target.value))),
    style: {
      flex: 1,
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '8px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14
    }
  }), [['½', 0.5], ['⅓', 1 / 3], ['Solde', 1]].map(([l, f]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setPartAmt(Math.round(net * f)),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      padding: '7px 10px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid var(--hairline)',
      background: 'transparent',
      color: 'var(--ink)'
    }
  }, l))), /*#__PURE__*/React.createElement(LBtn, {
    fullWidth: true,
    size: "lg",
    variant: "primary",
    disabled: !lines.length,
    onClick: () => {
      const label = lines.map(l => l.it.qty > 1 ? `${l.ref.nom} ×${l.it.qty}` : l.ref.nom).join(', ');
      const total = Math.round(net);
      const pay = partial ? Math.min(total, partAmt) : total;
      LK.addCash({
        client: clientNom,
        label,
        method,
        amount: pay
      });
      LK.addInvoice({
        client: clientNom,
        items: lines.map(l => [l.ref.nom + (l.it.qty > 1 ? ` ×${l.it.qty}` : ''), Math.round(l.lineNet)]),
        total,
        paye: pay,
        method,
        payHist: [{
          amount: pay,
          method,
          date: '26 juin 2026'
        }]
      });
      setPaid(true);
    }
  }, partial ? `Encaisser ${F(partAmt)} · acompte` : `Encaisser ${F(Math.round(net))}`)))));
}
function Row({
  k,
  v,
  copper
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '4px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: copper ? 'var(--copper-700)' : 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: copper ? 'var(--color-copper)' : 'var(--ink)'
    }
  }, v));
}
const posBtn = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  textAlign: 'left',
  cursor: 'pointer',
  padding: '14px 16px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--hairline)',
  background: 'var(--color-ivoire)'
};
const qBtn = {
  width: 28,
  height: 32,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: 16,
  color: 'var(--color-indigo)'
};

/* ---------- INVENTORY ---------- */
function Inventory() {
  const low = LK.products.filter(p => p.stock <= p.seuil);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LTitle, {
    k: "Gamme & stock \xB7 inventaire",
    right: /*#__PURE__*/React.createElement(LBtn, {
      variant: "copper"
    }, "+ Bon de commande")
  }, "Stock."), low.length > 0 && /*#__PURE__*/React.createElement(LCard, {
    surface: "obsidian",
    padding: 18,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-copper)'
    }
  }, "\u2B21"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, low.length, " alertes de r\xE9approvisionnement"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--indigo-100)',
      marginTop: 3
    }
  }, low.map(p => p.nom).join(' · '), " \u2014 sous le seuil.")), /*#__PURE__*/React.createElement(LBtn, {
    size: "sm",
    variant: "copper"
  }, "Commander tout"))), /*#__PURE__*/React.createElement(LCard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 1.2fr',
      padding: '13px 22px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Produit"), /*#__PURE__*/React.createElement("span", null, "Prix"), /*#__PURE__*/React.createElement("span", null, "Co\xFBt"), /*#__PURE__*/React.createElement("span", null, "Stock"), /*#__PURE__*/React.createElement("span", null, "\xC9tat")), LK.products.map((p, i) => {
    const isLow = p.stock <= p.seuil;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr 1.2fr',
        padding: '15px 22px',
        borderTop: '1px solid var(--hairline)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 17,
        color: 'var(--color-indigo)'
      }
    }, p.nom), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11.5,
        color: 'var(--ink-soft)'
      }
    }, p.contenance)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 16,
        color: 'var(--color-indigo)'
      }
    }, F(p.prix)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--ink-soft)'
      }
    }, F(p.cost)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 22,
        color: isLow ? 'var(--copper-600)' : 'var(--color-indigo)'
      }
    }, p.stock), /*#__PURE__*/React.createElement("span", null, isLow ? /*#__PURE__*/React.createElement(LBadge, {
      tone: "copper",
      size: "sm"
    }, "\xC0 r\xE9appro.") : /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        letterSpacing: '0.1em',
        color: 'var(--ink-soft)'
      }
    }, "En stock")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: 'var(--color-copper)',
      transform: 'rotate(45deg)'
    }
  }), "Le stock se d\xE9duit automatiquement \xE0 chaque service termin\xE9 (carte conso) et chaque vente POS."));
}

/* ---------- FINANCE ---------- */
function Finance() {
  const rows = [['Soins en salon', 1680000, 59], ['Vente gamme', 720000, 25], ['Académie', 320000, 11], ['Événements', 120000, 5]];
  const [period, setPeriod] = React.useState('mois');
  const fin = LK.finance[period];
  const delta = Math.round((fin.total - fin.prev) / fin.prev * 100);
  const maxPt = Math.max(...fin.points.map(p => p[1]), ...fin.prevPoints);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LEye, null, "Le tr\xE9sor \xB7 revenus"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, "Finances.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, [['semaine', 'Semaine'], ['mois', 'Mois'], ['annee', 'Année']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setPeriod(id),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (period === id ? 'var(--color-copper)' : 'var(--hairline)'),
      background: period === id ? 'var(--color-indigo)' : 'transparent',
      color: period === id ? 'var(--color-ivoire)' : 'var(--ink-soft)'
    }
  }, l)))), /*#__PURE__*/React.createElement(LCard, {
    padding: 26,
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, fin.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 48,
      color: 'var(--color-indigo)',
      margin: '6px 0 2px'
    }
  }, F(fin.total)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: delta >= 0 ? 'var(--accent-strong)' : 'var(--copper-700)'
    }
  }, delta >= 0 ? '▲' : '▼', " ", Math.abs(delta), "% vs. ", period === 'annee' ? 'année N-1' : period === 'mois' ? 'année précédente' : 'semaine N-1', " (", F(fin.prev), ")")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: 'var(--color-copper)'
    }
  }), period === 'annee' ? '2026' : 'Actuel'), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: 'var(--obsidian-200)'
    }
  }), period === 'annee' ? '2025' : 'N-1'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16,
      height: 180
    }
  }, fin.points.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 4,
      height: 150,
      width: '100%',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    title: 'N-1: ' + fin.prevPoints[i],
    style: {
      width: '34%',
      height: fin.prevPoints[i] / maxPt * 150 + 'px',
      background: 'var(--obsidian-200)',
      borderRadius: '2px 2px 0 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    title: 'Actuel: ' + p[1],
    style: {
      width: '34%',
      height: p[1] / maxPt * 150 + 'px',
      background: 'var(--color-copper)',
      borderRadius: '2px 2px 0 0'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, p[0]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(LCard, {
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "R\xE9partition \xB7 ", fin.label.toLowerCase()), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 0'
    }
  }, /*#__PURE__*/React.createElement(LFilet, {
    variant: "copper"
  })), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '11px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, r[2], "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'var(--hairline)',
      borderRadius: 2,
      marginTop: 7,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: r[2] + '%',
      height: '100%',
      background: 'var(--color-copper)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(LCard, {
    surface: "deep",
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      marginBottom: 4
    }
  }, "Cash-flow \xB7 pr\xE9vision 30 j"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 34,
      color: 'var(--color-ivoire)'
    }
  }, "+ 1,12 M"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 5,
      height: 60,
      marginTop: 16
    }
  }, [40, 55, 48, 70, 62, 80, 75, 92].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: h + '%',
      background: 'rgba(185,122,74,0.6)',
      borderRadius: '2px 2px 0 0'
    }
  })))), /*#__PURE__*/React.createElement(LCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Transactions r\xE9centes"), LK.txns.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 0',
      borderTop: i ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, t.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, t.items, " \xB7 ", t.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, F(t.total)), /*#__PURE__*/React.createElement(LBadge, {
    tone: t.method === 'momo' ? 'solid' : 'outline',
    size: "sm"
  }, t.method))))))), /*#__PURE__*/React.createElement(TopClients, null));
}
function TopClients() {
  const [open, setOpen] = React.useState(null);
  const ranked = [...LK.clients].sort((a, b) => b.ltv - a.ltv);
  const maxLtv = ranked[0] ? ranked[0].ltv : 1;
  const totalCA = ranked.reduce((s, c) => s + c.ltv, 0);
  return /*#__PURE__*/React.createElement(LCard, {
    padding: 26,
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, "Meilleurs clients \xB7 par chiffre d'affaires"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, "CA cumul\xE9 \xB7 ", F(totalCA))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0'
    }
  }, /*#__PURE__*/React.createElement(LFilet, {
    variant: "copper"
  })), ranked.map((c, i) => {
    const isOpen = open === c.id;
    const visites = c.visites || 1;
    const panier = Math.round(c.ltv / visites);
    const soins = Math.round(c.ltv * 0.72),
      gamme = Math.round(c.ltv * 0.20),
      autres = c.ltv - soins - gamme;
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      style: {
        borderBottom: '1px solid var(--hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : c.id),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '12px 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 20,
        color: i < 3 ? 'var(--color-copper)' : 'var(--ink-soft)',
        width: 26,
        flex: '0 0 auto'
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        backgroundImage: `url(../../assets/photos/${c.photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-serif)',
        fontSize: 17,
        color: 'var(--color-indigo)'
      }
    }, c.nom), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        height: 4,
        background: 'var(--hairline)',
        borderRadius: 2,
        marginTop: 5,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        width: c.ltv / maxLtv * 100 + '%',
        height: '100%',
        background: 'var(--color-copper)'
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-serif)',
        fontSize: 18,
        color: 'var(--color-indigo)'
      }
    }, F(c.ltv)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--ink-soft)'
      }
    }, visites, " visites \xB7 panier ", F(panier))), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-soft)',
        fontSize: 13,
        width: 18,
        flex: '0 0 auto'
      }
    }, isOpen ? '▾' : '▸')), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 0 18px 40px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 10,
        marginBottom: 12
      }
    }, [['Soins en salon', soins], ['Vente gamme', gamme], ['Autres', autres]].map((r, j) => /*#__PURE__*/React.createElement("div", {
      key: j,
      style: {
        background: 'var(--color-sable)',
        borderRadius: 'var(--radius-sm)',
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--ink-soft)'
      }
    }, r[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 18,
        color: 'var(--color-indigo)',
        marginTop: 4
      }
    }, F(r[1]))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 18,
        fontFamily: 'var(--font-sans)',
        fontSize: 12.5,
        color: 'var(--ink-soft)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "Profil \xB7 ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink)',
        fontWeight: 500
      }
    }, c.loc_type)), /*#__PURE__*/React.createElement("span", null, "Palier \xB7 ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink)',
        fontWeight: 500
      }
    }, c.tier)), /*#__PURE__*/React.createElement("span", null, "Cliente depuis \xB7 ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink)',
        fontWeight: 500
      }
    }, c.depuis)))));
  }));
}
Object.assign(window, {
  LK_POS: POS,
  LK_Inventory: Inventory,
  LK_Finance: Finance
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensB.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensC.jsx
try { (() => {
/* LOKAA Phase 1 — Screens C: Staff/Payroll/Commission, Marketing/Loyalty, AI */
const {
  Button: CBtn,
  Badge: CBadge,
  Card: CCard,
  Filet: CFilet,
  Stars: CStars,
  Eyebrow: CEye
} = window.MNDDesignSystem_a962de;
const LKC = window.LOKAA;
const FC = LKC.FCFA;
function CTitle({
  k,
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CEye, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, children)), right);
}

/* ---------- STAFF / PAYROLL / COMMISSION ---------- */
function Staff() {
  const [tab, setTab] = React.useState('equipe');
  const [, force] = React.useReducer(x => x + 1, 0);
  const [edit, setEdit] = React.useState(null); // staff object or 'new'
  React.useEffect(() => LKC.onData(force), []);
  const tabs = [['equipe', 'Équipe & KPIs'], ['comm', 'Commissions'], ['paie', 'Paie du mois']];
  const blank = {
    nom: '',
    role: 'Praticien',
    cert: 'Niveau I',
    base: 0,
    commPct: 0.1,
    commOn: true,
    login: '',
    loginRole: 'Praticien',
    password: '',
    photo: 'portrait-3.jpg'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CTitle, {
    k: "Le personnel \xB7 l'\xE9quipe couronn\xE9e",
    right: /*#__PURE__*/React.createElement(CBtn, {
      variant: "copper",
      onClick: () => setEdit(blank)
    }, "+ Membre")
  }, "Staff."), edit && /*#__PURE__*/React.createElement(StaffEditor, {
    s: edit,
    onClose: () => setEdit(null)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--hairline)',
      marginBottom: 22
    }
  }, tabs.map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 13px',
      marginRight: 26,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: tab === id ? 'var(--color-indigo)' : 'var(--ink-soft)',
      borderBottom: '2px solid ' + (tab === id ? 'var(--color-copper)' : 'transparent'),
      marginBottom: -1
    }
  }, l))), tab === 'equipe' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 16
    }
  }, LKC.staff.map(s => /*#__PURE__*/React.createElement(CCard, {
    key: s.id,
    padding: 20,
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${s.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)'
    }
  }, s.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: s.present ? '#1F8A5B' : 'var(--obsidian-200)'
    },
    title: s.present ? 'Présent' : 'Absent'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, s.role)), /*#__PURE__*/React.createElement(CBadge, {
    tone: "indigo",
    size: "sm"
  }, s.cert)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12
    }
  }, s.login ? /*#__PURE__*/React.createElement(CBadge, {
    tone: "solid",
    size: "sm"
  }, "\u26B7 ", s.login) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, "Pas de connexion"), /*#__PURE__*/React.createElement(CBadge, {
    tone: s.commOn === false ? 'outline' : 'copper',
    size: "sm"
  }, s.commOn === false ? 'Sans commission' : 'Commission ' + Math.round(s.commPct * 100) + '%')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8,
      marginTop: 14,
      paddingTop: 14,
      borderTop: '1px solid var(--hairline)'
    }
  }, [['CA mois', FC(s.caMois)], ['Rebook', Math.round(s.rebook * 100) + '%'], ['Note', s.note + '★']].map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, k[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)',
      marginTop: 3
    }
  }, k[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(CBtn, {
    size: "sm",
    variant: "secondary",
    onClick: () => setEdit(s)
  }, "Modifier"), /*#__PURE__*/React.createElement(CBtn, {
    size: "sm",
    variant: "ghost",
    onClick: () => {
      if (confirm('Supprimer ' + s.nom + ' ?')) LKC.removeStaff(s.id);
    }
  }, "Supprimer"))))), tab === 'comm' && /*#__PURE__*/React.createElement(CCard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1.2fr',
      padding: '13px 22px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Membre"), /*#__PURE__*/React.createElement("span", null, "CA g\xE9n\xE9r\xE9"), /*#__PURE__*/React.createElement("span", null, "Taux"), /*#__PURE__*/React.createElement("span", null, "Commission")), LKC.staff.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1.2fr',
      padding: '15px 22px',
      borderTop: '1px solid var(--hairline)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, s.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, FC(s.caMois)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, s.commOn === false ? '—' : Math.round(s.commPct * 100) + '%'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-copper)'
    }
  }, s.commOn === false ? '—' : FC(Math.round(s.caMois * s.commPct)))))), tab === 'paie' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CCard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1.2fr',
      padding: '13px 22px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Membre"), /*#__PURE__*/React.createElement("span", null, "Base"), /*#__PURE__*/React.createElement("span", null, "Commission"), /*#__PURE__*/React.createElement("span", null, "Net \xE0 payer")), LKC.staff.map(s => {
    const comm = Math.round(s.caMois * s.commPct);
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1.2fr',
        padding: '15px 22px',
        borderTop: '1px solid var(--hairline)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 17,
        color: 'var(--color-indigo)'
      }
    }, s.nom), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--ink-soft)'
      }
    }, FC(s.base)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--ink-soft)'
      }
    }, FC(comm)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 18,
        color: 'var(--color-indigo)'
      }
    }, FC(s.base + comm)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 16,
      padding: '16px 22px',
      background: 'var(--color-indigo)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Masse salariale \xB7 juin"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 30,
      color: 'var(--color-ivoire)'
    }
  }, FC(LKC.staff.reduce((t, s) => t + s.base + Math.round(s.caMois * s.commPct), 0)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(CBtn, {
    variant: "copper"
  }, "Lancer la paie \xB7 Mobile Money"))));
}

/* ---------- MARKETING / LOYALTY / REVIEWS ---------- */
function ReviewsPanel() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LKC.onReviews(force), []);
  const [replyTo, setReplyTo] = React.useState(null);
  const [draft, setDraft] = React.useState('');
  const [copied, setCopied] = React.useState(false);
  const startReply = r => {
    setReplyTo(r.id);
    setDraft(r.reply || `Merci infiniment ${r.nom.split(' ')[0]} 👑 `);
  };
  const save = () => {
    LKC.replyReview(replyTo, draft);
    setReplyTo(null);
  };
  return /*#__PURE__*/React.createElement(CCard, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 40,
      color: 'var(--color-indigo)'
    }
  }, "4,9"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CStars, {
    value: 5,
    size: 14
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, "214 avis"))), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      navigator.clipboard && navigator.clipboard.writeText(LKC.reviewLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.06em',
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--color-copper)',
      background: 'transparent',
      color: 'var(--color-copper)',
      cursor: 'pointer'
    }
  }, copied ? '✓ Lien copié' : '◉ Copier le lien d’avis Google')), LKC.reviews.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      padding: '12px 0',
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      color: 'var(--ink)'
    }
  }, r.nom, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-copper)'
    }
  }, '★'.repeat(r.note))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      color: 'var(--ink-soft)'
    }
  }, r.src, " \xB7 ", r.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 14,
      color: 'var(--color-indigo)',
      marginTop: 4,
      lineHeight: 1.4
    }
  }, "\xAB ", r.txt, " \xBB"), replyTo === r.id ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    rows: 2,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      padding: 8,
      border: '1px solid var(--color-copper)',
      borderRadius: 'var(--radius-sm)',
      resize: 'vertical'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(CBtn, {
    size: "sm",
    variant: "copper",
    onClick: save
  }, "Publier la r\xE9ponse"), /*#__PURE__*/React.createElement(CBtn, {
    size: "sm",
    variant: "ghost",
    onClick: () => setReplyTo(null)
  }, "Annuler"))) : r.reply ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      marginLeft: 14,
      paddingLeft: 12,
      borderLeft: '2px solid var(--color-copper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      marginBottom: 2
    }
  }, "R\xE9ponse de la Maison"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, r.reply), /*#__PURE__*/React.createElement("button", {
    onClick: () => startReply(r),
    style: {
      marginTop: 4,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--color-copper)'
    }
  }, "Modifier")) : /*#__PURE__*/React.createElement("button", {
    onClick: () => startReply(r),
    style: {
      marginTop: 6,
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--color-copper)'
    }
  }, "\u21A9 R\xE9pondre \xE0 cet avis"))));
}

/* ---------- MARKETING / LOYALTY / REVIEWS ---------- */
function Marketing() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CTitle, {
    k: "Marketing \xB7 la relation \xE0 grande \xE9chelle",
    right: /*#__PURE__*/React.createElement(CBtn, {
      variant: "copper"
    }, "+ Campagne")
  }, "Marketing."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Campagnes"), /*#__PURE__*/React.createElement(CCard, {
    padding: 0,
    style: {
      overflow: 'hidden',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1.2fr 1fr 1fr',
      padding: '13px 22px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Campagne"), /*#__PURE__*/React.createElement("span", null, "Canal"), /*#__PURE__*/React.createElement("span", null, "Cible"), /*#__PURE__*/React.createElement("span", null, "Ouverture"), /*#__PURE__*/React.createElement("span", null, "Statut")), LKC.campaigns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1.2fr 1fr 1fr',
      padding: '14px 22px',
      borderTop: '1px solid var(--hairline)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, c.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink)'
    }
  }, c.canal), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, c.cible), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-copper)'
    }
  }, Math.round(c.ouvert * 100), "%"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(CBadge, {
    tone: c.statut === 'Actif' ? 'solid' : c.statut === 'Programmé' ? 'copper' : 'outline',
    size: "sm"
  }, c.statut))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Programme de fid\xE9lit\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, LKC.loyalty.map(t => /*#__PURE__*/React.createElement(CCard, {
    key: t.tier,
    padding: 18,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: t.couleur,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      color: 'var(--color-indigo)'
    }
  }, t.tier), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, t.perks)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-indigo)'
    }
  }, t.clients), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "clientes")))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Avis \xB7 Google & Facebook"), /*#__PURE__*/React.createElement(ReviewsPanel, null))));
}

/* ---------- AI RECOMMENDATIONS ---------- */
function AI() {
  const recs = [{
    c: 'Adjoa K.',
    photo: 'model-microlocks.jpg',
    kind: 'Resserrage prévu',
    txt: 'Cadence 4–6 sem · dernier soin il y a 5 sem. Proposer un créneau samedi.',
    conf: 0.94,
    act: 'Proposer RDV'
  }, {
    c: 'Koffi M.',
    photo: 'brice-portrait.jpg',
    kind: 'Risque de churn',
    txt: 'Cuir chevelu gras · pas revenu depuis 10 sem. Persona Initié — relance pédagogique + Sérum Racines.',
    conf: 0.78,
    act: 'Relancer'
  }, {
    c: 'Naïma T.',
    photo: 'yeman-smile.jpg',
    kind: 'Upsell produit',
    txt: 'Diaspora · repart bientôt. Recommander coffret voyage (Brume + Huile Couronne).',
    conf: 0.86,
    act: 'Ajouter au panier'
  }, {
    c: 'Fatou B.',
    photo: 'portrait-2.jpg',
    kind: 'Croissance saine',
    txt: 'Maturité 78% · pousse régulière. Aucune action — féliciter au prochain RDV.',
    conf: 0.91,
    act: 'Noter'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CTitle, {
    k: "LOKAA Intelligence \xB7 assistance, jamais automatique"
  }, "Recommandations IA."), /*#__PURE__*/React.createElement(CCard, {
    surface: "deep",
    padding: 22,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 30,
      color: 'var(--color-copper)'
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Insight de la semaine"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 21,
      color: 'var(--color-ivoire)',
      marginTop: 4
    }
  }, "Pic de demande pr\xE9vu samedi \u2014 ouvrez 2 cr\xE9neaux resserrage de plus."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--indigo-100)',
      marginTop: 4
    }
  }, "Revenu projet\xE9 +14% si capacit\xE9 ajout\xE9e. Bas\xE9 sur la cadence des microlocks matures.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 16
    }
  }, recs.map((r, i) => /*#__PURE__*/React.createElement(CCard, {
    key: i,
    padding: 20,
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${r.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)'
    }
  }, r.c), /*#__PURE__*/React.createElement(CBadge, {
    tone: "copper",
    size: "sm"
  }, r.kind)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12.5,
      lineHeight: 1.55,
      color: 'var(--ink-soft)',
      margin: '8px 0 12px'
    }
  }, r.txt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, "Confiance ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-copper)',
      fontWeight: 500
    }
  }, Math.round(r.conf * 100), "%")), /*#__PURE__*/React.createElement(CBtn, {
    size: "sm",
    variant: "primary"
  }, r.act))))))));
}
function StaffEditor({
  s,
  onClose
}) {
  const isNew = !s.id;
  const [f, setF] = React.useState({
    commOn: true,
    login: '',
    loginRole: 'Praticien',
    password: '',
    base: 0,
    commPct: 0.1,
    ...s
  });
  const set = (k, v) => setF(o => ({
    ...o,
    [k]: v
  }));
  const save = () => {
    const patch = {
      nom: f.nom,
      role: f.role,
      cert: f.cert,
      base: Number(f.base) || 0,
      commPct: Number(f.commPct) || 0,
      commOn: f.commOn,
      login: f.login,
      loginRole: f.loginRole
    };
    if (isNew) LKC.addStaff(patch);else LKC.updateStaff(s.id, patch);
    onClose();
  };
  const inp = {
    width: '100%',
    border: 'none',
    borderBottom: '1px solid var(--hairline)',
    background: 'transparent',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    padding: '8px 2px',
    outline: 'none',
    color: 'var(--ink)'
  };
  const lab = {
    fontFamily: 'var(--font-sans)',
    fontSize: 10,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    marginBottom: 6,
    display: 'block'
  };
  return /*#__PURE__*/React.createElement(CCard, {
    padding: 26,
    style: {
      marginBottom: 22,
      border: '1px solid var(--color-copper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)'
    }
  }, isNew ? 'Nouveau membre' : 'Modifier ' + s.nom), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 16,
      color: 'var(--ink-soft)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Nom complet"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: f.nom,
    onChange: e => set('nom', e.target.value),
    placeholder: "Pr\xE9nom Nom"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "R\xF4le / poste"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: f.role,
    onChange: e => set('role', e.target.value),
    placeholder: "Praticien"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Certification"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: f.cert,
    onChange: e => set('cert', e.target.value)
  }, ['Niveau I', 'Niveau II', 'Niveau III'].map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Salaire de base (mois)"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    type: "number",
    value: f.base,
    onChange: e => set('base', e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      padding: '16px 18px',
      background: 'var(--color-sable)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, "Verser une commission"), /*#__PURE__*/React.createElement("button", {
    onClick: () => set('commOn', !f.commOn),
    style: {
      width: 42,
      height: 24,
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      background: f.commOn ? 'var(--color-copper)' : 'var(--obsidian-200)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: f.commOn ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 200ms'
    }
  }))), f.commOn && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Taux de commission \xB7 ", Math.round((Number(f.commPct) || 0) * 100), "%"), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "0.3",
    step: "0.01",
    value: f.commPct,
    onChange: e => set('commPct', e.target.value),
    style: {
      width: '100%',
      accentColor: 'var(--color-copper)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: '16px 18px',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      marginBottom: 14
    }
  }, "\u26B7 Connexion de l'employ\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Identifiant / email"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    value: f.login,
    onChange: e => set('login', e.target.value),
    placeholder: "prenom@mnd.bj"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "R\xF4le d'acc\xE8s"), /*#__PURE__*/React.createElement("select", {
    style: inp,
    value: f.loginRole,
    onChange: e => set('loginRole', e.target.value)
  }, ['Manager', 'Réception', 'Praticien', 'Apprenti'].map(r => /*#__PURE__*/React.createElement("option", {
    key: r
  }, r)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lab
  }, "Mot de passe initial"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    type: "text",
    value: f.password,
    onChange: e => set('password', e.target.value),
    placeholder: "\xE0 transmettre"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'end',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, "L'employ\xE9 change son mot de passe \xE0 la 1\u02B3\u1D49 connexion."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(CBtn, {
    variant: "copper",
    onClick: save
  }, isNew ? 'Créer le membre' : 'Enregistrer'), /*#__PURE__*/React.createElement(CBtn, {
    variant: "secondary",
    onClick: onClose
  }, "Annuler")));
}
Object.assign(window, {
  LK_Staff: Staff,
  LK_Marketing: Marketing,
  LK_AI: AI
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensC.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensD.jsx
try { (() => {
/* LOKAA Phase 1 — Screens D: Calendar, Invoices & Devis, Analytics, Settings */
const {
  Button: DBtn,
  Badge: DBadge,
  Card: DCard,
  Filet: DFilet,
  Eyebrow: DEye
} = window.MNDDesignSystem_a962de;
const LKD = window.LOKAA;
const FD = LKD.FCFA;
function DTitle({
  k,
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DEye, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, children)), right);
}
const TONE_BG = {
  indigo: 'var(--color-indigo)',
  copper: 'var(--color-copper)',
  sable: 'var(--color-argile)'
};

/* ---------- CALENDAR (week grid) ---------- */
function Calendar() {
  const [stylistFilter, setStylistFilter] = React.useState('Tous');
  const [booking, setBooking] = React.useState(null);
  const [editEvt, setEditEvt] = React.useState(null);
  const [, force] = React.useReducer(x => x + 1, 0);
  const [drag, setDrag] = React.useState(null); // {id, over:{day,hour}}
  React.useEffect(() => LKD.onWeek(force), []);
  const days = ['Lun 23', 'Mar 24', 'Mer 25', 'Jeu 26', 'Ven 27', 'Sam 28'];
  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const HSTART = 8,
    ROW = 52;
  const stylists = ['Tous', 'Yéman', 'Brice', 'Sékou'];
  const evts = LKD.week.filter(e => stylistFilter === 'Tous' || e.stylist === stylistFilter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DTitle, {
    k: "Le carnet \xB7 vue semaine",
    right: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, stylists.map(s => /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => setStylistFilter(s),
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11.5,
        padding: '8px 14px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        border: '1px solid ' + (stylistFilter === s ? 'var(--color-copper)' : 'var(--hairline)'),
        background: stylistFilter === s ? 'var(--color-indigo)' : 'transparent',
        color: stylistFilter === s ? 'var(--color-ivoire)' : 'var(--ink-soft)'
      }
    }, s)))
  }, "Calendrier."), /*#__PURE__*/React.createElement(DCard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '56px repeat(6, 1fr)',
      borderBottom: '1px solid var(--hairline)',
      background: 'var(--color-sable)'
    }
  }, /*#__PURE__*/React.createElement("div", null), days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 10px',
      textAlign: 'center',
      borderLeft: '1px solid var(--hairline)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: i === 3 ? 'var(--color-copper)' : 'var(--ink-soft)',
      fontWeight: i === 3 ? 600 : 400
    }
  }, d))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '56px repeat(6, 1fr)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      height: ROW,
      borderBottom: '1px solid var(--hairline)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      color: 'var(--ink-soft)',
      padding: '4px 8px',
      textAlign: 'right'
    }
  }, h, "h"))), [0, 1, 2, 3, 4, 5].map(di => /*#__PURE__*/React.createElement("div", {
    key: di,
    style: {
      position: 'relative',
      borderLeft: '1px solid var(--hairline)'
    }
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    onClick: () => setBooking({
      day: days[di] + ' juin',
      time: (h < 10 ? '0' : '') + h + ':00',
      stylist: stylistFilter === 'Tous' ? 'Yéman' : stylistFilter
    }),
    onDragOver: e => {
      if (drag) {
        e.preventDefault();
        if (!drag.over || drag.over.day !== di + 1 || drag.over.hour !== h) setDrag({
          ...drag,
          over: {
            day: di + 1,
            hour: h
          }
        });
      }
    },
    onDrop: e => {
      e.preventDefault();
      if (drag) {
        LKD.moveAppt(drag.id, di + 1, h);
        setDrag(null);
      }
    },
    title: "R\xE9server ce cr\xE9neau",
    style: {
      height: ROW,
      borderBottom: '1px solid var(--hairline)',
      cursor: 'pointer',
      background: drag && drag.over && drag.over.day === di + 1 && drag.over.hour === h ? 'var(--copper-50)' : 'transparent',
      outline: drag && drag.over && drag.over.day === di + 1 && drag.over.hour === h ? '1px dashed var(--color-copper)' : 'none',
      outlineOffset: -2
    },
    className: "cal-slot"
  })), evts.filter(e => e.day === di + 1).map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: e.id || i,
    draggable: true,
    onClick: ev => {
      ev.stopPropagation();
      setEditEvt(e);
    },
    onDragStart: ev => {
      setDrag({
        id: e.id,
        over: null
      });
      try {
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData('text/plain', e.id);
      } catch (x) {}
    },
    onDragEnd: () => setDrag(null),
    title: `${e.svc} · ${e.client} — cliquez pour modifier, glissez pour déplacer`,
    style: {
      position: 'absolute',
      left: 3,
      right: 3,
      top: (e.start - HSTART) * ROW + 1,
      height: e.len * ROW - 3,
      background: TONE_BG[e.tone],
      borderRadius: 4,
      padding: '5px 7px',
      overflow: 'hidden',
      cursor: 'grab',
      boxShadow: 'var(--shadow-xs)',
      borderLeft: '2px solid rgba(246,241,231,0.5)',
      opacity: drag && drag.id === e.id ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      color: 'var(--color-ivoire)',
      lineHeight: 1.2
    }
  }, e.svc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      color: 'rgba(246,241,231,0.85)',
      marginTop: 1
    }
  }, e.client), e.len > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      color: 'rgba(246,241,231,0.7)',
      marginTop: 3
    }
  }, e.stylist))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 14
    }
  }, [['indigo', 'Soin / entretien'], ['copper', 'Installation (multi-jours)'], ['sable', 'Consultation']].map(([t, l]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: TONE_BG[t]
    }
  }), l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: 'var(--color-copper)',
      transform: 'rotate(45deg)'
    }
  }), "Cliquez une case vide pour r\xE9server, ou ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-indigo)',
      fontWeight: 500
    }
  }, "glissez un rendez-vous"), " vers un autre jour ou une autre heure pour le d\xE9placer."), booking && window.LK_BookingModal && /*#__PURE__*/React.createElement(window.LK_BookingModal, {
    initial: booking,
    onClose: () => setBooking(null)
  }), editEvt && /*#__PURE__*/React.createElement(CalEvtModal, {
    evt: editEvt,
    days: days,
    onClose: () => setEditEvt(null)
  }));
}

/* ---------- CALENDAR EVENT · quick edit ---------- */
function CalEvtModal({
  evt,
  days,
  onClose
}) {
  const [svc, setSvc] = React.useState(evt.svc);
  const [client, setClient] = React.useState(evt.client);
  const [stylist, setStylist] = React.useState(evt.stylist);
  const [day, setDay] = React.useState(evt.day);
  const [start, setStart] = React.useState(evt.start);
  const [len, setLen] = React.useState(evt.len);
  const STY = ['Yéman', 'Brice', 'Sékou', 'Aïcha'];
  const TONES = [['indigo', 'Soin / entretien'], ['copper', 'Installation'], ['sable', 'Consultation']];
  const [tone, setTone] = React.useState(evt.tone);
  const f = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'var(--color-indigo)',
    border: 'none',
    borderBottom: '1px solid var(--hairline)',
    background: 'transparent',
    padding: '8px 2px',
    outline: 'none',
    width: '100%'
  };
  const lb = {
    fontFamily: 'var(--font-sans)',
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--ink-soft)',
    display: 'block',
    marginBottom: 4,
    marginTop: 14
  };
  const save = () => {
    LKD.updateWeekAppt(evt.id, {
      svc,
      client,
      stylist,
      day,
      start: parseFloat(start),
      len: parseFloat(len),
      tone
    });
    onClose();
  };
  const del = () => {
    if (confirm('Supprimer ce rendez-vous de l’agenda ?')) {
      LKD.removeWeekAppt(evt.id);
      onClose();
    }
  };
  const dup = () => {
    LKD.duplicateAppt(evt.id);
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(20,20,27,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      width: 'min(420px, 92vw)',
      padding: 26,
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "Modifier le rendez-vous"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      color: 'var(--ink-soft)',
      cursor: 'pointer'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("label", {
    style: lb
  }, "Service"), /*#__PURE__*/React.createElement("input", {
    style: f,
    value: svc,
    onChange: e => setSvc(e.target.value)
  }), /*#__PURE__*/React.createElement("label", {
    style: lb
  }, "Cliente"), /*#__PURE__*/React.createElement("input", {
    style: f,
    value: client,
    onChange: e => setClient(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lb
  }, "Coiffeur\xB7se"), /*#__PURE__*/React.createElement("select", {
    style: f,
    value: stylist,
    onChange: e => setStylist(e.target.value)
  }, STY.map(s => /*#__PURE__*/React.createElement("option", {
    key: s
  }, s)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lb
  }, "Jour"), /*#__PURE__*/React.createElement("select", {
    style: f,
    value: day,
    onChange: e => setDay(parseInt(e.target.value))
  }, days.map((d, i) => /*#__PURE__*/React.createElement("option", {
    key: i,
    value: i + 1
  }, d)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lb
  }, "Heure de d\xE9but"), /*#__PURE__*/React.createElement("select", {
    style: f,
    value: start,
    onChange: e => setStart(e.target.value)
  }, [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(h => /*#__PURE__*/React.createElement("option", {
    key: h,
    value: h
  }, h, "h00")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lb
  }, "Dur\xE9e (h)"), /*#__PURE__*/React.createElement("select", {
    style: f,
    value: len,
    onChange: e => setLen(e.target.value)
  }, [1, 1.5, 2, 3, 4, 5, 6].map(h => /*#__PURE__*/React.createElement("option", {
    key: h,
    value: h
  }, h, " h"))))), /*#__PURE__*/React.createElement("label", {
    style: lb
  }, "Cat\xE9gorie"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 2
    }
  }, TONES.map(([t, l]) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTone(t),
    style: {
      flex: 1,
      padding: '8px 6px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      border: '1px solid ' + (tone === t ? 'var(--color-copper)' : 'var(--hairline)'),
      background: tone === t ? 'var(--color-ivoire)' : 'transparent',
      color: 'var(--ink)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DBtn, {
    variant: "copper",
    onClick: save
  }, "Enregistrer"), /*#__PURE__*/React.createElement(DBtn, {
    variant: "ghost",
    onClick: dup
  }, "Dupliquer"), /*#__PURE__*/React.createElement(DBtn, {
    variant: "ghost",
    onClick: del,
    style: {
      color: '#a8324a'
    }
  }, "Supprimer"))));
}
function InvoiceBuilder({
  defaultType,
  onClose,
  onCreated
}) {
  const [type, setType] = React.useState(defaultType);
  const [clientQuery, setClientQuery] = React.useState('');
  const [client, setClient] = React.useState(null);
  const [lines, setLines] = React.useState([]); // {svc, prix, remise}
  const matches = LKD.clients.filter(c => !clientQuery.trim() || c.nom.toLowerCase().includes(clientQuery.trim().toLowerCase()));
  const addLine = s => setLines(ls => [...ls, {
    svc: s.nom,
    prix: s.prix,
    remise: 0
  }]);
  const setLine = (i, patch) => setLines(ls => ls.map((l, k) => k === i ? {
    ...l,
    ...patch
  } : l));
  const delLine = i => setLines(ls => ls.filter((_, k) => k !== i));
  const total = lines.reduce((s, l) => s + Math.round(l.prix * (1 - l.remise / 100)), 0);
  const create = () => {
    const id = LKD.addInvoice({
      type,
      client: client ? client.nom : 'Client',
      items: lines.map(l => [l.svc + (l.remise ? ` (−${l.remise}%)` : ''), Math.round(l.prix * (1 - l.remise / 100))]),
      total
    });
    onCreated(id);
  };
  const inp = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px 12px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--hairline)',
    background: 'var(--color-ivoire)',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'var(--color-indigo)'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(12,13,32,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--color-ivoire)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      width: 'min(620px,96vw)',
      maxHeight: '92vh',
      overflowY: 'auto',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 28,
      color: 'var(--color-indigo)'
    }
  }, "Nouveau document"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--ink-soft)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 18
    }
  }, [['facture', 'Facture'], ['devis', 'Devis']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setType(id),
    style: {
      flex: 1,
      padding: '11px 0',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid ' + (type === id ? 'var(--color-copper)' : 'var(--hairline)'),
      background: type === id ? 'var(--color-indigo)' : 'transparent',
      color: type === id ? 'var(--color-ivoire)' : 'var(--ink-soft)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: lblD
  }, "Client de la prestation"), client ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--color-copper)',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${client.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, client.nom, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, " \xB7 ", client.loc_type)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setClient(null),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--color-copper)'
    }
  }, "Changer")) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: clientQuery,
    onChange: e => setClientQuery(e.target.value),
    placeholder: "Rechercher un client\u2026",
    style: inp
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      marginTop: 8,
      maxHeight: 170,
      overflowY: 'auto'
    }
  }, matches.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => {
      setClient(c);
      setClientQuery('');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 10px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--hairline)',
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${c.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)'
    }
  }, c.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, c.ville))), matches.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontStyle: 'italic',
      color: 'var(--ink-soft)',
      padding: '8px 4px'
    }
  }, "Aucun client."))), /*#__PURE__*/React.createElement("div", {
    style: lblD
  }, "Lignes \xB7 services & remises"), lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)'
    }
  }, l.svc), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: l.prix,
    onChange: e => setLine(i, {
      prix: +e.target.value
    }),
    style: {
      width: 90,
      ...inp,
      padding: '6px 8px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    }
  }, [0, 10, 20, 50].map(r => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => setLine(i, {
      remise: r
    }),
    style: {
      width: 32,
      height: 30,
      borderRadius: 4,
      cursor: 'pointer',
      border: '1px solid ' + (l.remise === r ? 'var(--color-copper)' : 'var(--hairline)'),
      background: l.remise === r ? 'var(--color-copper)' : 'transparent',
      color: l.remise === r ? 'var(--color-ivoire)' : 'var(--ink-soft)',
      fontFamily: 'var(--font-sans)',
      fontSize: 11
    }
  }, r === 0 ? '—' : r + '%'))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 78,
      textAlign: 'right',
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)'
    }
  }, FD(Math.round(l.prix * (1 - l.remise / 100)))), /*#__PURE__*/React.createElement("button", {
    onClick: () => delLine(i),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-soft)',
      fontSize: 15
    }
  }, "\u2715"))), /*#__PURE__*/React.createElement("details", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("summary", {
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      letterSpacing: '0.06em',
      color: 'var(--color-copper)'
    }
  }, "+ Ajouter un service depuis le catalogue"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 6,
      marginTop: 10
    }
  }, LKD.services.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    onClick: () => addLine(s),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '9px 11px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--hairline)',
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink)'
    }
  }, s.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 13,
      color: 'var(--color-copper)'
    }
  }, FD(s.prix)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      margin: '20px 0 14px',
      paddingTop: 14,
      borderTop: '2px solid var(--color-copper)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Total ", type), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 30,
      color: 'var(--color-indigo)'
    }
  }, FD(total))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(DBtn, {
    variant: "copper",
    disabled: !client || lines.length === 0,
    onClick: create
  }, "Cr\xE9er le ", type), /*#__PURE__*/React.createElement(DBtn, {
    variant: "ghost",
    onClick: onClose
  }, "Annuler"))));
}
const lblD = {
  fontFamily: 'var(--font-sans)',
  fontSize: 10,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: 8
};
function Invoices() {
  const [tab, setTab] = React.useState('factures');
  const [open, setOpen] = React.useState(null);
  const [building, setBuilding] = React.useState(false);
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LKD.onInvoices(force), []);
  const list = tab === 'impayees' ? LKD.unpaidInvoices() : LKD.invoices.filter(d => tab === 'factures' ? d.type === 'facture' : d.type === 'devis');
  if (open) {
    const live = LKD.invoices.find(x => x.id === open) || null;
    if (live) return /*#__PURE__*/React.createElement(InvoiceDetail, {
      doc: live,
      onBack: () => setOpen(null)
    });
  }
  const stTone = s => s === 'Payée' || s === 'Accepté' ? 'solid' : s === 'Partielle' ? 'copper' : s === 'Impayée' ? 'outline' : 'copper';
  return /*#__PURE__*/React.createElement("div", null, building && /*#__PURE__*/React.createElement(InvoiceBuilder, {
    defaultType: tab === 'devis' ? 'devis' : 'facture',
    onClose: () => setBuilding(false),
    onCreated: id => {
      setBuilding(false);
      setOpen(id);
    }
  }), /*#__PURE__*/React.createElement(DTitle, {
    k: "Caisse \xB7 documents",
    right: /*#__PURE__*/React.createElement(DBtn, {
      variant: "copper",
      onClick: () => setBuilding(true)
    }, "+ ", tab === 'devis' ? 'Devis' : 'Facture')
  }, "Factures & devis."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--hairline)',
      marginBottom: 22
    }
  }, [['factures', 'Factures'], ['devis', 'Devis'], ['impayees', 'Impayées · ' + LKD.unpaidInvoices().length]].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 13px',
      marginRight: 26,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: tab === id ? 'var(--color-indigo)' : 'var(--ink-soft)',
      borderBottom: '2px solid ' + (tab === id ? 'var(--color-copper)' : 'transparent'),
      marginBottom: -1
    }
  }, l))), tab === 'impayees' && /*#__PURE__*/React.createElement(DCard, {
    surface: "deep",
    padding: 18,
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Reste \xE0 encaisser"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--indigo-100)',
      marginTop: 3
    }
  }, LKD.unpaidInvoices().length, " factures impay\xE9es ou partielles")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 32,
      color: 'var(--color-ivoire)'
    }
  }, FD(LKD.outstandingTotal())))), /*#__PURE__*/React.createElement(DCard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.3fr 1fr 1fr 0.9fr 0.9fr',
      padding: '13px 22px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "N\xB0"), /*#__PURE__*/React.createElement("span", null, "Client"), /*#__PURE__*/React.createElement("span", null, "Date"), /*#__PURE__*/React.createElement("span", null, "Montant"), /*#__PURE__*/React.createElement("span", null, "R\xE9gl\xE9"), /*#__PURE__*/React.createElement("span", null, "Statut")), list.map(d => /*#__PURE__*/React.createElement("button", {
    key: d.id,
    onClick: () => setOpen(d.id),
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1.3fr 1fr 1fr 0.9fr 0.9fr',
      padding: '15px 22px',
      borderTop: '1px solid var(--hairline)',
      alignItems: 'center',
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, monospace',
      fontSize: 12,
      color: 'var(--color-copper)'
    }
  }, d.id), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, d.client), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, d.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)'
    }
  }, FD(d.total)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: d.type === 'devis' ? 'var(--ink-soft)' : d.paye >= d.total ? '#1F8A5B' : 'var(--copper-700)'
    }
  }, d.type === 'devis' ? '—' : FD(d.paye || 0)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(DBadge, {
    tone: stTone(d.statut),
    size: "sm"
  }, d.statut))))));
}
function InvoiceDetail({
  doc,
  onBack
}) {
  const isFacture = doc.type === 'facture';
  const B = LKD.getBrand();
  const [pay, setPay] = React.useState(false);
  const [payAmt, setPayAmt] = React.useState(Math.max(0, doc.total - (doc.paye || 0)));
  const [payMethod, setPayMethod] = React.useState('momo');
  const [payDate, setPayDate] = React.useState(LKD.isoToday ? LKD.isoToday() : new Date().toISOString().slice(0, 10));
  const [editDate, setEditDate] = React.useState(false);
  const [dateVal, setDateVal] = React.useState(doc.date);
  const due = doc.total - (doc.paye || 0) + 0;
  const grand = doc.total + (doc.pourboire || 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 18
    }
  }, "\u2190 Retour"), /*#__PURE__*/React.createElement(DCard, {
    padding: 0,
    style: {
      overflow: 'hidden',
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: B.colors.indigo,
      padding: '28px 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/monograms/${B.mono}`,
    alt: "",
    style: {
      width: 38,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      letterSpacing: '0.14em',
      color: 'var(--color-ivoire)'
    }
  }, B.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'rgba(246,241,231,0.7)',
      marginTop: 2
    }
  }, B.city)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: B.colors.copper
    }
  }, isFacture ? 'Facture' : 'Devis'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'ui-monospace, monospace',
      fontSize: 14,
      color: 'var(--color-ivoire)',
      marginTop: 4
    }
  }, doc.id), editDate ? /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    type: "date",
    defaultValue: LKD.toISO ? LKD.toISO(doc.date) : '',
    onChange: e => {
      if (e.target.value) {
        LKD.updateInvoice(doc.id, {
          date: LKD.frDate(e.target.value),
          dateISO: e.target.value
        });
      }
    },
    onBlur: () => setEditDate(false),
    style: {
      marginTop: 6,
      background: 'rgba(255,255,255,0.12)',
      border: '1px solid ' + B.colors.copper,
      borderRadius: 3,
      color: 'var(--color-ivoire)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '4px 6px',
      colorScheme: 'dark'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    onClick: () => setEditDate(true),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'rgba(246,241,231,0.7)',
      marginTop: 6,
      cursor: 'pointer',
      textDecoration: 'underline dotted'
    },
    title: "Modifier la date"
  }, doc.date, " \uD83D\uDCC5"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, isFacture ? 'Facturé à' : 'Devis pour'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)',
      marginTop: 4
    }
  }, doc.client)), !isFacture && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Valide jusqu'au"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)',
      marginTop: 4
    }
  }, doc.valide))), doc.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, it[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, FD(it[1])))), isFacture && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink-soft)'
    }
  }, "Pourboire"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: doc.pourboire || 0,
    onChange: e => LKD.updateInvoice(doc.id, {
      pourboire: Number(e.target.value) || 0
    }),
    style: {
      width: 90,
      textAlign: 'right',
      border: 'none',
      borderBottom: '1px solid var(--hairline)',
      background: 'transparent',
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-copper)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, "F"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Total ", doc.pourboire ? '+ pourboire' : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 32,
      color: 'var(--color-indigo)'
    }
  }, FD(grand))), isFacture && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: '14px 16px',
      background: doc.statut === 'Payée' ? 'rgba(31,138,91,0.08)' : 'var(--copper-50)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DBadge, {
    tone: doc.statut === 'Payée' ? 'solid' : doc.statut === 'Partielle' ? 'copper' : 'outline',
    size: "sm"
  }, doc.statut), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)',
      marginTop: 6
    }
  }, "R\xE9gl\xE9 ", FD(doc.paye || 0), " \xB7 reste ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-indigo)'
    }
  }, FD(Math.max(0, due)))), doc.payHist && doc.payHist.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, doc.payHist.map((p, pi) => /*#__PURE__*/React.createElement("div", {
    key: pi,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)',
      padding: '2px 0'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xB7 ", p.date, " \xB7 ", {
    momo: 'Mobile Money',
    cash: 'Espèces',
    card: 'Carte',
    whatsapp: 'WhatsApp'
  }[p.method] || p.method), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-indigo)'
    }
  }, FD(p.amount)), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (confirm('Supprimer ce versement de ' + FD(p.amount) + ' ?')) LKD.removePayment(doc.id, pi);
    },
    title: "Supprimer ce paiement",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#a8324a',
      fontSize: 12,
      lineHeight: 1,
      padding: 0
    }
  }, "\u2715")))))), doc.statut !== 'Payée' && /*#__PURE__*/React.createElement(DBtn, {
    size: "sm",
    variant: "copper",
    onClick: () => {
      setPayAmt(Math.max(0, doc.total - (doc.paye || 0)));
      setPay(!pay);
    }
  }, "Encaisser un paiement")), pay && doc.statut !== 'Payée' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 14,
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 5
    }
  }, "Montant", payAmt < due ? ' (partiel)' : ''), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: payAmt,
    onChange: e => setPayAmt(Number(e.target.value) || 0),
    style: {
      width: 120,
      border: 'none',
      borderBottom: '1px solid var(--hairline)',
      background: 'transparent',
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)',
      outline: 'none',
      padding: '4px 2px'
    }
  })), /*#__PURE__*/React.createElement("select", {
    value: payMethod,
    onChange: e => setPayMethod(e.target.value),
    style: {
      border: 'none',
      borderBottom: '1px solid var(--hairline)',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      padding: '6px 2px',
      outline: 'none'
    }
  }, [['momo', 'Mobile Money'], ['cash', 'Espèces'], ['card', 'Carte'], ['whatsapp', 'WhatsApp']].map(([v, l]) => /*#__PURE__*/React.createElement("option", {
    key: v,
    value: v
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 5
    }
  }, "Date du paiement"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: payDate,
    onChange: e => setPayDate(e.target.value),
    style: {
      border: 'none',
      borderBottom: '1px solid var(--hairline)',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      padding: '6px 2px',
      outline: 'none',
      color: 'var(--color-indigo)'
    }
  })), /*#__PURE__*/React.createElement(DBtn, {
    size: "sm",
    variant: "primary",
    onClick: () => {
      LKD.recordPayment(doc.id, payAmt, payMethod, LKD.frDate ? LKD.frDate(payDate) : payDate);
      setPay(false);
    }
  }, "Valider")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 10
    }
  }, [['½', 0.5], ['⅓', 1 / 3], ['Solde', 1]].map(([lbl, frac]) => /*#__PURE__*/React.createElement("button", {
    key: lbl,
    onClick: () => setPayAmt(Math.round(due * frac)),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--hairline)',
      background: 'transparent',
      color: 'var(--color-indigo)',
      cursor: 'pointer'
    }
  }, lbl))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, isFacture ? /*#__PURE__*/React.createElement(DBtn, {
    variant: "primary"
  }, "T\xE9l\xE9charger PDF") : /*#__PURE__*/React.createElement(DBtn, {
    variant: "copper"
  }, "Convertir en facture"), /*#__PURE__*/React.createElement(DBtn, {
    variant: "secondary"
  }, "Envoyer \xB7 WhatsApp"), /*#__PURE__*/React.createElement(DBtn, {
    variant: "ghost",
    onClick: () => {
      const id = LKD.duplicateInvoice(doc.id);
      if (id) onBack();
    }
  }, "Dupliquer"), /*#__PURE__*/React.createElement(DBtn, {
    variant: "ghost",
    onClick: () => {
      if (confirm('Supprimer définitivement ' + (isFacture ? 'cette facture' : 'ce devis') + ' (' + doc.id + ') ?')) {
        LKD.removeInvoice(doc.id);
        onBack();
      }
    },
    style: {
      color: '#a8324a'
    }
  }, "Supprimer ", isFacture ? 'la facture' : 'le devis')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 14,
      color: B.colors.copper,
      textAlign: 'center'
    }
  }, B.signature))));
}

/* ---------- ANALYTICS ---------- */
function Analytics() {
  const months = [['Jan', 1.9], ['Fév', 2.1], ['Mar', 2.4], ['Avr', 2.2], ['Mai', 2.41], ['Juin', 2.84]];
  const max = 3;
  const svcMix = [['Installation', 44, 'var(--color-indigo)'], ['Entretien', 31, 'var(--color-copper)'], ['Soin', 16, 'var(--copper-300)'], ['Gamme', 9, 'var(--color-argile)']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DTitle, {
    k: "Analytique \xB7 la vue d'ensemble"
  }, "Analytics."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 22
    }
  }, [['Revenu · 6 mois', '14,0 M', '▲ 22%'], ['Rétention', '88%', '▲ 4 pts'], ['Panier moyen', '34 200 F', '▲ 9%'], ['Âge moyen client', LKD.avgAge() + ' ans', 'diaspora 35%']].map((k, i) => /*#__PURE__*/React.createElement(DCard, {
    key: i,
    padding: 20,
    topFilet: i === 0,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, k[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 36,
      color: 'var(--color-indigo)',
      marginTop: 8
    }
  }, k[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--accent-strong)',
      marginTop: 6
    }
  }, k[2])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(DCard, {
    padding: 26
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 21,
      color: 'var(--color-indigo)',
      margin: '0 0 20px'
    }
  }, "Revenu mensuel \xB7 M FCFA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 14,
      height: 180
    }
  }, months.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 13,
      color: 'var(--color-indigo)'
    }
  }, m[1]), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: m[1] / max * 150,
      background: i === months.length - 1 ? 'var(--color-copper)' : 'var(--color-indigo)',
      borderRadius: '3px 3px 0 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, m[0]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(DCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 19,
      color: 'var(--color-indigo)',
      margin: '0 0 14px'
    }
  }, "Mix de services"), svcMix.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, s[0]), /*#__PURE__*/React.createElement("span", null, s[1], "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--hairline)',
      borderRadius: 3,
      marginTop: 5,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: s[1] + '%',
      height: '100%',
      background: s[2]
    }
  }))))), /*#__PURE__*/React.createElement(DCard, {
    surface: "deep",
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      marginBottom: 10
    }
  }, "Top services \xB7 revenu"), [['Création Nano-locks', '4,3 M'], ['Resserrage microlocks', '2,8 M'], ['Sisterlocks', '1,9 M']].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderTop: i ? '1px solid var(--hairline-invert)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--color-ivoire)'
    }
  }, t[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-copper)'
    }
  }, t[1])))))));
}

/* ---------- SETTINGS ---------- */
function Settings() {
  const [section, setSection] = React.useState('maison');
  const secs = [['maison', 'La Maison'], ['branches', 'Branches & devises'], ['whitelabel', 'White-label'], ['equipe', 'Équipe & rôles'], ['paiements', 'Paiements'], ['notifs', 'Notifications'], ['marque', 'Marque']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DTitle, {
    k: "R\xE9glages \xB7 configuration"
  }, "Param\xE8tres."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '220px 1fr',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, secs.map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setSection(id),
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      padding: '11px 16px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      background: section === id ? 'var(--color-indigo)' : 'transparent',
      color: section === id ? 'var(--color-ivoire)' : 'var(--ink)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5
    }
  }, l))), /*#__PURE__*/React.createElement("div", null, section === 'maison' && /*#__PURE__*/React.createElement(DCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: '0 0 20px'
    }
  }, "La Maison"), /*#__PURE__*/React.createElement(Row2, {
    k: "Nom",
    v: "Maison MND"
  }), /*#__PURE__*/React.createElement(Row2, {
    k: "Ville",
    v: "Cotonou, B\xE9nin"
  }), /*#__PURE__*/React.createElement(Row2, {
    k: "Devise",
    v: "FCFA (XOF)"
  }), /*#__PURE__*/React.createElement(Row2, {
    k: "Fuseau",
    v: "GMT+1 \xB7 Africa/Porto-Novo"
  }), /*#__PURE__*/React.createElement(Row2, {
    k: "Langues",
    v: "Fran\xE7ais \xB7 English \xB7 Fon"
  }), /*#__PURE__*/React.createElement(Row2, {
    k: "Contact",
    v: "contact@mnd.bj \xB7 +229 01 96 75 60 62",
    last: true
  })), section === 'branches' && /*#__PURE__*/React.createElement(Branches, null), section === 'whitelabel' && /*#__PURE__*/React.createElement(WhiteLabel, null), section === 'equipe' && /*#__PURE__*/React.createElement(DCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: '0 0 18px'
    }
  }, "\xC9quipe & r\xF4les"), LKD.staff.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0',
      borderTop: i ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${s.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, s.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)'
    }
  }, s.role)), /*#__PURE__*/React.createElement(DBadge, {
    tone: "indigo",
    size: "sm"
  }, s.cert))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DBtn, {
    size: "sm",
    variant: "copper"
  }, "+ Inviter un membre"))), section === 'paiements' && /*#__PURE__*/React.createElement(DCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: '0 0 18px'
    }
  }, "Moyens de paiement"), window.LK_PaymentsSettings ? /*#__PURE__*/React.createElement(window.LK_PaymentsSettings, null) : null), section === 'notifs' && /*#__PURE__*/React.createElement(DCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: '0 0 18px'
    }
  }, "Notifications"), [['Rappels RDV (WhatsApp T-48h / T-2h)', true], ['Alertes stock bas', true], ['Anniversaires clientes', true], ['Recommandations IA', true], ['Rapport quotidien par email', false], ['Avis Google à modérer', true]].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderTop: i ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, p[0]), /*#__PURE__*/React.createElement(Toggle, {
    on: p[1]
  })))), section === 'marque' && /*#__PURE__*/React.createElement(DCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: '0 0 6px'
    }
  }, "Marque"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12.5,
      color: 'var(--ink-soft)',
      margin: '0 0 18px'
    }
  }, "Marque active du compte. Modifiable dans l'onglet White-label."), (() => {
    const B = LKD.getBrand();
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginBottom: 20
      }
    }, [B.colors.indigo, B.colors.copper, B.colors.obsidian, B.colors.ivoire].map(c => /*#__PURE__*/React.createElement("div", {
      key: c,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        borderRadius: 8,
        background: c,
        border: '1px solid var(--hairline)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'ui-monospace, monospace',
        fontSize: 10,
        color: 'var(--ink-soft)',
        marginTop: 5
      }
    }, c)))), /*#__PURE__*/React.createElement(Row2, {
      k: "Entreprise",
      v: B.name
    }), /*#__PURE__*/React.createElement(Row2, {
      k: "Logo",
      v: B.logo
    }), /*#__PURE__*/React.createElement(Row2, {
      k: "Forfait",
      v: (LKD.PLANS[B.plan] || {}).label || B.plan
    }), /*#__PURE__*/React.createElement(Row2, {
      k: "Police titre",
      v: "Cormorant Garamond"
    }), /*#__PURE__*/React.createElement(Row2, {
      k: "Police interface",
      v: "Jost"
    }), /*#__PURE__*/React.createElement(Row2, {
      k: "Signature",
      v: B.signature,
      last: true
    }));
  })()))));
}
function Row2({
  k,
  v,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '13px 0',
      borderBottom: last ? 'none' : '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, v));
}
function Toggle({
  on
}) {
  const [v, setV] = React.useState(on);
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setV(!v),
    style: {
      width: 42,
      height: 24,
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      background: v ? 'var(--color-copper)' : 'var(--obsidian-200)',
      position: 'relative',
      transition: 'background 200ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: v ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 200ms'
    }
  }));
}

/* ---------- WHITE-LABEL ---------- */
function WhiteLabel() {
  const [b, setB] = React.useState(LKD.getBrand());
  const [form, setForm] = React.useState({
    ...LKD.getBrand()
  });
  const [editingKey, setEditingKey] = React.useState(LKD.getBrand().key || 'mnd');
  const [applied, setApplied] = React.useState(false);
  const [savedMsg, setSavedMsg] = React.useState('');
  const palettes = [{
    name: 'Indigo & Cuivre (MND)',
    colors: {
      indigo: '#1E2150',
      copper: '#B97A4A',
      obsidian: '#14141B',
      ivoire: '#F6F1E7'
    }
  }, {
    name: 'Forêt & Or',
    colors: {
      indigo: '#1B3A2E',
      copper: '#C8962F',
      obsidian: '#13201A',
      ivoire: '#F4F0E6'
    }
  }, {
    name: 'Prune & Terracotta',
    colors: {
      indigo: '#4A2A4D',
      copper: '#C77F59',
      obsidian: '#1E1320',
      ivoire: '#F5EFE9'
    }
  }, {
    name: 'Encre & Laiton',
    colors: {
      indigo: '#23304A',
      copper: '#A98B5B',
      obsidian: '#14181F',
      ivoire: '#F2EFE8'
    }
  }];
  const logos = ['app-icon.png', 'mono-copper.png', 'mono-indigo.png', 'mono-obsidian.png', 'mono-ivoire.png'];
  const apply = () => {
    LKD.setBrand(form);
    setB({
      ...form
    });
    setApplied(true);
    setTimeout(() => setApplied(false), 2600);
  };
  const flash = m => {
    setSavedMsg(m);
    setTimeout(() => setSavedMsg(''), 2600);
  };
  const registerNew = () => {
    if (!form.name) {
      flash('Donnez un nom à l’entreprise.');
      return;
    }
    const key = LKD.registerBrand({
      ...form
    });
    setEditingKey(key);
    setB(LKD.getBrand());
    flash('Nouvelle entreprise enregistrée et activée : ' + form.name);
  };
  const saveExisting = () => {
    if (editingKey === 'mnd') {
      flash('La maison MND est permanente — utilisez « Enregistrer comme nouvelle ».');
      return;
    }
    LKD.updateBrandPreset(editingKey, {
      ...form
    });
    setB(LKD.getBrand());
    flash('Compte « ' + form.name + ' » mis à jour.');
  };
  const deleteExisting = () => {
    if (editingKey === 'mnd') {
      flash('La maison MND ne peut pas être supprimée.');
      return;
    }
    if (!confirm('Supprimer le compte white-label « ' + form.name + ' » ?')) return;
    LKD.removeBrandPreset(editingKey);
    const nb = LKD.getBrand();
    setForm({
      ...nb
    });
    setEditingKey(nb.key || 'mnd');
    setB(nb);
    flash('Compte supprimé.');
  };
  const pickPreset = p => {
    setForm({
      ...p
    });
    setEditingKey(p.key);
    LKD.setBrand({
      ...p
    });
    setB({
      ...p
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DCard, {
    padding: 28,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "White-label \xB7 marque du compte"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13,
      color: 'var(--ink-soft)',
      margin: '6px 0 0',
      maxWidth: 460,
      lineHeight: 1.55
    }
  }, "Inscrivez une entreprise : son logo, ses couleurs et sa signature se r\xE9percutent sur les factures, devis, messages et e-mails. Tout le travail de \xAB Le Tr\xF4ne \xB7 MND \xBB reste intact.")), /*#__PURE__*/React.createElement(DBadge, {
    tone: "copper",
    size: "sm"
  }, "Multi-tenant")), applied && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--copper-50)',
      border: '1px solid var(--copper-100)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      margin: '14px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--copper-700)'
    }
  }, "\u2713 Marque appliqu\xE9e \u2014 visible sur les factures, devis et l'en-t\xEAte."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      margin: '18px 0 10px'
    }
  }, "Comptes enregistr\xE9s \xB7 cliquez pour activer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, LKD.brandPresets.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.key,
    onClick: () => pickPreset(p),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      border: '1px solid ' + (editingKey === p.key ? 'var(--color-copper)' : 'var(--hairline)'),
      background: editingKey === p.key ? 'var(--color-ivoire)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 6,
      background: p.colors.indigo,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/monograms/${p.mono}`,
    style: {
      width: 16
    },
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      color: 'var(--ink-soft)'
    }
  }, p.sub || p.city, (b.key || 'mnd') === p.key ? ' · actif' : '')))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(DCard, {
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 16
    }
  }, "Inscrire / modifier une entreprise"), /*#__PURE__*/React.createElement(WLField, {
    label: "Nom de l'entreprise",
    value: form.name,
    onChange: v => setForm({
      ...form,
      name: v
    })
  }), /*#__PURE__*/React.createElement(WLField, {
    label: "Ville / pays",
    value: form.city,
    onChange: v => setForm({
      ...form,
      city: v
    })
  }), /*#__PURE__*/React.createElement(WLField, {
    label: "Email de contact",
    value: form.contact,
    onChange: v => setForm({
      ...form,
      contact: v
    })
  }), /*#__PURE__*/React.createElement(WLField, {
    label: "T\xE9l\xE9phone",
    value: form.tel,
    onChange: v => setForm({
      ...form,
      tel: v
    })
  }), /*#__PURE__*/React.createElement(WLField, {
    label: "Signature de marque",
    value: form.signature,
    onChange: v => setForm({
      ...form,
      signature: v
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      margin: '18px 0 8px'
    }
  }, "Logo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setForm({
      ...form,
      mono: l,
      logo: l
    }),
    style: {
      width: 46,
      height: 46,
      borderRadius: 8,
      cursor: 'pointer',
      background: form.mono === l ? form.colors.indigo : 'var(--color-sable)',
      border: '1px solid ' + (form.mono === l ? 'var(--color-copper)' : 'var(--hairline)'),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/monograms/${l}`,
    style: {
      width: 22
    },
    alt: ""
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      margin: '18px 0 8px'
    }
  }, "Palette de couleurs"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, palettes.map(p => {
    const on = p.colors.indigo === form.colors.indigo && p.colors.copper === form.colors.copper;
    return /*#__PURE__*/React.createElement("button", {
      key: p.name,
      onClick: () => setForm({
        ...form,
        colors: {
          ...p.colors
        }
      }),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '8px 12px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        border: '1px solid ' + (on ? 'var(--color-copper)' : 'var(--hairline)'),
        background: on ? 'var(--color-ivoire)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 3
      }
    }, Object.values(p.colors).map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        width: 18,
        height: 18,
        borderRadius: 4,
        background: c,
        border: '1px solid var(--hairline)'
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12.5,
        color: 'var(--ink)'
      }
    }, p.name));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      margin: '18px 0 8px'
    }
  }, "Forfait"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, Object.entries(LKD.PLANS).map(([key, p]) => {
    const on = (form.plan || 'maison') === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => setForm({
        ...form,
        plan: key,
        features: {
          ...LKD.PLANS[key].features
        }
      }),
      style: {
        flex: '1 1 auto',
        textAlign: 'left',
        padding: '9px 12px',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        border: '1px solid ' + (on ? 'var(--color-copper)' : 'var(--hairline)'),
        background: on ? 'var(--color-indigo)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 15,
        color: on ? 'var(--color-ivoire)' : 'var(--color-indigo)'
      }
    }, p.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        color: on ? 'var(--copper-200)' : 'var(--ink-soft)'
      }
    }, p.prix));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      margin: '18px 0 8px'
    }
  }, "Modules inclus \xB7 activer / d\xE9sactiver"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, Object.entries(LKD.FEATURE_LABELS).map(([key, lab]) => {
    const on = (form.features || {})[key] !== false;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '9px 0',
        borderBottom: '1px solid var(--hairline)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        color: 'var(--ink)'
      }
    }, lab), /*#__PURE__*/React.createElement("button", {
      onClick: () => setForm({
        ...form,
        features: {
          ...form.features,
          [key]: !on
        }
      }),
      style: {
        width: 42,
        height: 24,
        borderRadius: 12,
        border: 'none',
        cursor: 'pointer',
        background: on ? 'var(--color-copper)' : 'var(--obsidian-200)',
        position: 'relative',
        transition: 'background 200ms',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 3,
        left: on ? 21 : 3,
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: '#fff',
        transition: 'left 200ms'
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DBtn, {
    variant: "copper",
    onClick: apply
  }, "Appliquer la marque"), /*#__PURE__*/React.createElement(DBtn, {
    variant: "secondary",
    onClick: registerNew
  }, "Enregistrer comme nouvelle"), editingKey !== 'mnd' && /*#__PURE__*/React.createElement(DBtn, {
    variant: "ghost",
    onClick: saveExisting
  }, "Mettre \xE0 jour"), editingKey !== 'mnd' && /*#__PURE__*/React.createElement(DBtn, {
    variant: "ghost",
    onClick: deleteExisting,
    style: {
      color: '#a8324a'
    }
  }, "Supprimer")), savedMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: 'var(--copper-50)',
      border: '1px solid var(--copper-100)',
      borderRadius: 'var(--radius-sm)',
      padding: '9px 13px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--copper-700)'
    }
  }, savedMsg)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Aper\xE7u \xB7 en-t\xEAte de facture"), /*#__PURE__*/React.createElement(DCard, {
    padding: 0,
    style: {
      overflow: 'hidden',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: form.colors.indigo,
      padding: '24px 26px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/monograms/${form.mono}`,
    alt: "",
    style: {
      width: 34,
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      letterSpacing: '0.12em',
      color: form.colors.ivoire
    }
  }, form.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 2
    }
  }, form.city)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: form.colors.copper
    }
  }, "Facture")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 26px',
      background: form.colors.ivoire
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: '#333'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Resserrage microlocks"), /*#__PURE__*/React.createElement("span", null, "35 000 F")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 13,
      color: form.colors.copper,
      textAlign: 'center'
    }
  }, form.signature))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      margin: '4px 0 12px'
    }
  }, "Aper\xE7u \xB7 e-mail / message"), /*#__PURE__*/React.createElement(DCard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: form.colors.indigo,
      padding: '16px 20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/monograms/${form.mono}`,
    alt: "",
    style: {
      width: 24,
      marginBottom: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      letterSpacing: '0.16em',
      color: form.colors.ivoire
    }
  }, form.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 300,
      color: 'var(--ink)',
      lineHeight: 1.6
    }
  }, "Bonjour, votre rendez-vous est confirm\xE9. \xC0 tr\xE8s bient\xF4t."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      marginTop: 12,
      background: form.colors.copper,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '9px 18px',
      borderRadius: 2
    }
  }, "Confirmer"))))));
}
function WLField({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 5
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange(e.target.value),
    style: {
      width: '100%',
      border: 'none',
      borderBottom: '1px solid var(--hairline)',
      background: 'transparent',
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)',
      padding: '4px 0',
      outline: 'none'
    }
  }));
}

/* ---------- BRANCHES & CURRENCIES ---------- */
function Branches() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LKD.onBranch(force), []);
  const [adding, setAdding] = React.useState(false);
  const [editId, setEditId] = React.useState(null);
  const [f, setF] = React.useState({
    name: '',
    city: '',
    pays: '',
    currency: 'XOF'
  });
  const [ef, setEf] = React.useState({
    name: '',
    city: '',
    pays: '',
    currency: 'XOF',
    chairs: 1
  });
  const active = LKD.activeBranch();
  const fld = {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 300,
    color: 'var(--ink)',
    border: 'none',
    borderBottom: '1px solid var(--hairline)',
    background: 'transparent',
    padding: '8px 2px',
    outline: 'none',
    width: '100%'
  };
  const lbl = {
    fontFamily: 'var(--font-sans)',
    fontSize: 10,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--accent)',
    display: 'block',
    marginBottom: 4
  };
  const create = () => {
    if (!f.name) return;
    LKD.addBranch({
      ...f
    });
    setF({
      name: '',
      city: '',
      pays: '',
      currency: 'XOF'
    });
    setAdding(false);
  };
  const startEdit = b => {
    setEditId(b.id);
    setEf({
      name: b.name,
      city: b.city || '',
      pays: b.pays || '',
      currency: b.currency,
      chairs: b.chairs || 1
    });
  };
  const saveEdit = () => {
    LKD.updateBranch(editId, {
      ...ef,
      chairs: parseInt(ef.chairs) || 1
    });
    setEditId(null);
  };
  const del = b => {
    if (LKD.branches.length <= 1) {
      alert('Au moins une branche est requise.');
      return;
    }
    if (confirm('Supprimer la branche « ' + b.name + ' » ? Ses données (clients, services, agenda) lui sont propres.')) LKD.removeBranch(b.id);
  };
  return /*#__PURE__*/React.createElement(DCard, {
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "Branches & devises"), /*#__PURE__*/React.createElement(DBtn, {
    size: "sm",
    variant: "copper",
    onClick: () => setAdding(!adding)
  }, adding ? 'Fermer' : '+ Nouvelle branche')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      margin: '0 0 18px'
    }
  }, "Chaque branche a sa propre devise. La devise active suit la branche choisie en haut de l'app."), adding && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-sable)',
      borderRadius: 'var(--radius-md)',
      padding: 20,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Nom de la branche"), /*#__PURE__*/React.createElement("input", {
    style: fld,
    value: f.name,
    onChange: e => setF({
      ...f,
      name: e.target.value
    }),
    placeholder: "Montr\xE9al \xB7 Diaspora"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Ville"), /*#__PURE__*/React.createElement("input", {
    style: fld,
    value: f.city,
    onChange: e => setF({
      ...f,
      city: e.target.value
    }),
    placeholder: "Montr\xE9al"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Pays"), /*#__PURE__*/React.createElement("input", {
    style: fld,
    value: f.pays,
    onChange: e => setF({
      ...f,
      pays: e.target.value
    }),
    placeholder: "Canada"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "Devise"), /*#__PURE__*/React.createElement("select", {
    style: fld,
    value: f.currency,
    onChange: e => setF({
      ...f,
      currency: e.target.value
    })
  }, Object.values(LKD.CURRENCIES).map(c => /*#__PURE__*/React.createElement("option", {
    key: c.code,
    value: c.code
  }, c.label, " (", c.code, " \xB7 ", c.symbol, ")"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DBtn, {
    variant: "copper",
    onClick: create
  }, "Cr\xE9er la branche"))), LKD.branches.map((b, i) => {
    const cur = LKD.CURRENCIES[b.currency] || LKD.CURRENCIES.XOF;
    const on = b.id === active.id;
    if (editId === b.id) {
      return /*#__PURE__*/React.createElement("div", {
        key: b.id,
        style: {
          background: 'var(--color-sable)',
          borderRadius: 'var(--radius-md)',
          padding: 20,
          margin: '12px 0'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        style: lbl
      }, "Nom"), /*#__PURE__*/React.createElement("input", {
        style: fld,
        value: ef.name,
        onChange: e => setEf({
          ...ef,
          name: e.target.value
        })
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        style: lbl
      }, "Ville"), /*#__PURE__*/React.createElement("input", {
        style: fld,
        value: ef.city,
        onChange: e => setEf({
          ...ef,
          city: e.target.value
        })
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        style: lbl
      }, "Pays"), /*#__PURE__*/React.createElement("input", {
        style: fld,
        value: ef.pays,
        onChange: e => setEf({
          ...ef,
          pays: e.target.value
        })
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        style: lbl
      }, "Fauteuils"), /*#__PURE__*/React.createElement("input", {
        type: "number",
        min: "1",
        style: fld,
        value: ef.chairs,
        onChange: e => setEf({
          ...ef,
          chairs: e.target.value
        })
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
        style: lbl
      }, "Devise"), /*#__PURE__*/React.createElement("select", {
        style: fld,
        value: ef.currency,
        onChange: e => setEf({
          ...ef,
          currency: e.target.value
        })
      }, Object.values(LKD.CURRENCIES).map(c => /*#__PURE__*/React.createElement("option", {
        key: c.code,
        value: c.code
      }, c.label, " (", c.code, " \xB7 ", c.symbol, ")"))))), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 16,
          display: 'flex',
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(DBtn, {
        variant: "copper",
        onClick: saveEdit
      }, "Enregistrer"), /*#__PURE__*/React.createElement(DBtn, {
        variant: "ghost",
        onClick: () => setEditId(null)
      }, "Annuler")));
    }
    return /*#__PURE__*/React.createElement("div", {
      key: b.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '14px 0',
        borderTop: i ? '1px solid var(--hairline)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: on ? 'var(--color-copper)' : 'var(--obsidian-200)',
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 18,
        color: 'var(--color-indigo)'
      }
    }, b.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)'
      }
    }, b.city, b.pays ? ', ' + b.pays : '', " \xB7 ", b.chairs, " fauteuil", b.chairs > 1 ? 's' : '')), /*#__PURE__*/React.createElement(DBadge, {
      tone: "indigo",
      size: "sm"
    }, cur.label, " \xB7 ", cur.symbol), on ? /*#__PURE__*/React.createElement(DBadge, {
      tone: "copper",
      size: "sm"
    }, "Active") : /*#__PURE__*/React.createElement(DBtn, {
      size: "sm",
      variant: "secondary",
      onClick: () => LKD.setActiveBranch(b.id)
    }, "Activer"), /*#__PURE__*/React.createElement("button", {
      onClick: () => startEdit(b),
      title: "Modifier",
      style: {
        background: 'none',
        border: '1px solid var(--hairline)',
        borderRadius: 5,
        width: 28,
        height: 28,
        cursor: 'pointer',
        color: 'var(--ink-soft)',
        fontSize: 12
      }
    }, "\u270E"), /*#__PURE__*/React.createElement("button", {
      onClick: () => del(b),
      title: "Supprimer",
      style: {
        background: 'none',
        border: '1px solid var(--hairline)',
        borderRadius: 5,
        width: 28,
        height: 28,
        cursor: 'pointer',
        color: '#a8324a',
        fontSize: 12
      }
    }, "\u2715"));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: 'var(--color-copper)',
      transform: 'rotate(45deg)'
    }
  }), "Exemple de conversion : un soin \xE0 18 000 F = ", LKD.CURRENCIES.EUR.symbol, " ", (18000 * LKD.CURRENCIES.EUR.rate).toFixed(2), " \xB7 ", LKD.CURRENCIES.CAD.symbol, " ", (18000 * LKD.CURRENCIES.CAD.rate).toFixed(2), " \xB7 ", LKD.CURRENCIES.USD.symbol, " ", (18000 * LKD.CURRENCIES.USD.rate).toFixed(2)));
}
Object.assign(window, {
  LK_Calendar: Calendar,
  LK_Invoices: Invoices,
  LK_Analytics: Analytics,
  LK_Settings: Settings
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensD.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensE.jsx
try { (() => {
/* LOKAA Phase 1 — Screens E: Consultations (selectable + editable) */
const {
  Button: EBtn,
  Badge: EBadge,
  Card: ECard,
  Filet: EFilet,
  Eyebrow: EEye
} = window.MNDDesignSystem_a962de;
const LKE = window.LOKAA;
const FE = LKE.FCFA;
const CT = LKE.CONSULT_TYPES;
// Couleurs de type liées à la charte de marque active (suivent le white-label)
const TYPE_VAR = {
  demarrage: 'var(--color-indigo)',
  'plan-soin': 'var(--color-copper)',
  restauration: 'var(--copper-700)',
  suivi: 'var(--indigo-400)'
};
const tcol = type => TYPE_VAR[type] || 'var(--color-indigo)';
function Consultations() {
  const [mode, setMode] = React.useState('dossiers');
  // editable working copy of all consultations
  const [items, setItems] = React.useState(() => LKE.consultsFull.map(c => ({
    ...c,
    diag: {
      ...c.diag
    },
    plan: [...c.plan]
  })));
  const [selId, setSelId] = React.useState(items[0].id);
  const [filter, setFilter] = React.useState('tous');
  const [editing, setEditing] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const sel = items.find(c => c.id === selId);
  const shown = filter === 'tous' ? items : items.filter(c => c.type === filter);
  const patch = (field, val) => setItems(arr => arr.map(c => c.id === selId ? {
    ...c,
    [field]: val
  } : c));
  const patchPlan = (i, val) => setItems(arr => arr.map(c => c.id === selId ? {
    ...c,
    plan: c.plan.map((p, j) => j === i ? val : p)
  } : c));
  const addPlan = () => setItems(arr => arr.map(c => c.id === selId ? {
    ...c,
    plan: [...c.plan, 'Nouvelle étape…']
  } : c));
  const delPlan = i => setItems(arr => arr.map(c => c.id === selId ? {
    ...c,
    plan: c.plan.filter((_, j) => j !== i)
  } : c));
  const save = () => {
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EEye, null, "CRM \xB7 diagnostics & plans de soin"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, "Consultations.")), mode === 'dossiers' && /*#__PURE__*/React.createElement(EBtn, {
    variant: "copper"
  }, "+ Nouvelle consultation")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20
    }
  }, [['dossiers', 'Dossiers'], ['formulaires', 'Formulaires personnalisables']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setMode(k),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '9px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (mode === k ? 'var(--color-copper)' : 'var(--hairline)'),
      background: mode === k ? 'var(--color-copper)' : 'transparent',
      color: mode === k ? '#fff' : 'var(--ink-soft)',
      fontWeight: mode === k ? 600 : 400
    }
  }, l))), mode === 'formulaires' && /*#__PURE__*/React.createElement(FormBuilder, null), mode === 'dossiers' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, [['tous', 'Toutes']].concat(Object.entries(CT).map(([k, v]) => [k, v.label])).map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setFilter(k),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (filter === k ? 'var(--color-copper)' : 'var(--hairline)'),
      background: filter === k ? 'var(--color-indigo)' : 'transparent',
      color: filter === k ? 'var(--color-ivoire)' : 'var(--ink-soft)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, shown.map(c => {
    const t = CT[c.type];
    const active = c.id === selId;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => {
        setSelId(c.id);
        setEditing(false);
      },
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid ' + (active ? 'var(--color-copper)' : 'var(--hairline)'),
        background: active ? 'var(--color-ivoire)' : 'transparent',
        boxShadow: active ? 'var(--shadow-sm)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-sans)',
        fontSize: 9.5,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: tcol(c.type)
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: tcol(c.type)
      }
    }), t.label), c.nouveau && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 9,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--color-ivoire)',
        background: 'var(--color-copper)',
        borderRadius: 'var(--radius-pill)',
        padding: '2px 8px'
      }
    }, "Nouvelle")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 20,
        color: 'var(--color-indigo)'
      }
    }, c.client), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)',
        marginTop: 2
      }
    }, new Date(c.date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short'
    }), " \xB7 ", c.heure, " \xB7 ", c.maitre));
  })), /*#__PURE__*/React.createElement(ECard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: tcol(sel.type),
      padding: '22px 26px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'rgba(246,241,231,0.75)'
    }
  }, CT[sel.type].label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 30,
      color: 'var(--color-ivoire)',
      marginTop: 4
    }
  }, sel.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'rgba(246,241,231,0.8)',
      marginTop: 4
    }
  }, CT[sel.type].desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, editing ? /*#__PURE__*/React.createElement("button", {
    onClick: save,
    style: {
      background: 'var(--color-copper)',
      color: '#fff',
      border: 'none',
      borderRadius: 2,
      padding: '9px 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Enregistrer") : /*#__PURE__*/React.createElement("button", {
    onClick: () => setEditing(true),
    style: {
      background: 'rgba(246,241,231,0.14)',
      color: '#fff',
      border: '1px solid rgba(246,241,231,0.3)',
      borderRadius: 2,
      padding: '9px 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, "Modifier"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 26px'
    }
  }, saved && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--copper-50)',
      border: '1px solid var(--copper-100)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      marginBottom: 18,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--copper-700)'
    }
  }, "\u2713 Consultation enregistr\xE9e."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 0,
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      marginBottom: 22
    }
  }, [['Type de cliente', sel.nouveau ? 'Nouvelle' : 'Existante'], ['Date', new Date(sel.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short'
  }) + ' · ' + sel.heure], ['Maître', sel.maitre], ['Budget estimé', sel.budget ? FE(sel.budget) : 'À définir']].map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 16px',
      borderRight: i < 3 ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, k[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)',
      marginTop: 4
    }
  }, k[1])))), /*#__PURE__*/React.createElement(Field, {
    label: "Objectif de la cliente",
    editing: editing,
    value: sel.objectif,
    onChange: v => patch('objectif', v)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lblStyle
  }, "Statut"), editing ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['À planifier', 'Confirmé', 'À venir', 'Terminé'].map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => patch('statut', s),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '8px 14px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid ' + (sel.statut === s ? 'var(--color-copper)' : 'var(--hairline)'),
      background: sel.statut === s ? 'var(--copper-50)' : 'transparent',
      color: sel.statut === s ? 'var(--copper-700)' : 'var(--ink-soft)'
    }
  }, s))) : /*#__PURE__*/React.createElement(EBadge, {
    tone: "indigo",
    size: "sm"
  }, sel.statut)), /*#__PURE__*/React.createElement("div", {
    style: lblStyle
  }, "Diagnostic capillaire"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 12,
      marginBottom: 22
    }
  }, [['longueur', 'Longueur'], ['nature', 'Nature du cheveu'], ['cuir', 'Cuir chevelu'], ['densite', 'Densité']].map(([key, lab]) => /*#__PURE__*/React.createElement("div", {
    key: key,
    style: {
      background: 'var(--color-sable)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, lab), editing ? /*#__PURE__*/React.createElement("input", {
    value: sel.diag[key],
    onChange: e => patch('diag', {
      ...sel.diag,
      [key]: e.target.value
    }),
    style: inputStyle
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)',
      marginTop: 4
    }
  }, sel.diag[key])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lblStyle
  }, "Plan de soin recommand\xE9"), editing && /*#__PURE__*/React.createElement("button", {
    onClick: addPlan,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--color-copper)'
    }
  }, "+ \xC9tape")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, sel.plan.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: '9px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-copper)',
      width: 22,
      flex: '0 0 auto'
    }
  }, i + 1), editing ? /*#__PURE__*/React.createElement("input", {
    value: p,
    onChange: e => patchPlan(i, e.target.value),
    style: {
      ...inputStyle,
      flex: 1,
      marginTop: 0
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 300,
      color: 'var(--ink)'
    }
  }, p), editing && /*#__PURE__*/React.createElement("button", {
    onClick: () => delPlan(i),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-soft)',
      fontSize: 14
    }
  }, "\u2715")))), /*#__PURE__*/React.createElement(Field, {
    label: "Notes internes (guide staff)",
    editing: editing,
    value: sel.notes,
    onChange: v => patch('notes', v),
    multi: true
  }), !editing && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(EBtn, {
    variant: "primary"
  }, "Convertir en devis"), /*#__PURE__*/React.createElement(EBtn, {
    variant: "secondary"
  }, "Envoyer le plan \xB7 WhatsApp")))))));
}
const lblStyle = {
  fontFamily: 'var(--font-sans)',
  fontSize: 10,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: 10
};
const inputStyle = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid var(--color-copper)',
  background: 'transparent',
  fontFamily: 'var(--font-serif)',
  fontSize: 16,
  color: 'var(--color-indigo)',
  padding: '4px 0',
  marginTop: 4,
  outline: 'none'
};
function Field({
  label,
  value,
  editing,
  onChange,
  multi
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lblStyle
  }, label), editing ? multi ? /*#__PURE__*/React.createElement("textarea", {
    value: value,
    onChange: e => onChange(e.target.value),
    rows: 3,
    style: {
      width: '100%',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-ivoire)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--ink)',
      padding: '10px 12px',
      resize: 'vertical',
      outline: 'none'
    }
  }) : /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange(e.target.value),
    style: inputStyle
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: multi ? 'var(--font-sans)' : 'var(--font-serif)',
      fontWeight: multi ? 300 : 400,
      fontSize: multi ? 14 : 18,
      lineHeight: multi ? 1.6 : 1.3,
      color: multi ? 'var(--ink-soft)' : 'var(--color-indigo)',
      fontStyle: multi ? 'italic' : 'normal'
    }
  }, value));
}

/* ---------- FORM BUILDER : questionnaires de consultation personnalisables ---------- */
const KINDS = {
  text: 'Texte court',
  textarea: 'Texte long',
  select: 'Liste déroulante',
  radio: 'Choix unique',
  checkbox: 'Choix multiple'
};
const NEEDS_OPTS = k => k === 'select' || k === 'radio' || k === 'checkbox';
function FormBuilder() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LKE.onConsultForms(force), []);
  const forms = LKE.consultForms;
  const [selId, setSelId] = React.useState(forms[0] ? forms[0].id : null);
  const [preview, setPreview] = React.useState(false);
  const form = forms.find(f => f.id === selId) || forms[0];
  const missingTypes = Object.keys(CT).filter(t => !forms.some(f => f.type === t));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, forms.map(f => {
    const active = f.id === (form && form.id);
    return /*#__PURE__*/React.createElement("button", {
      key: f.id,
      onClick: () => {
        setSelId(f.id);
        setPreview(false);
      },
      style: {
        textAlign: 'left',
        cursor: 'pointer',
        padding: '14px 16px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid ' + (active ? 'var(--color-copper)' : 'var(--hairline)'),
        background: active ? 'var(--color-ivoire)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-sans)',
        fontSize: 9.5,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: tcol(f.type)
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: tcol(f.type)
      }
    }), CT[f.type] ? CT[f.type].label : f.type), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 17,
        color: 'var(--color-indigo)',
        marginTop: 5
      }
    }, f.titre), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11.5,
        color: 'var(--ink-soft)',
        marginTop: 2
      }
    }, f.questions.length, " question", f.questions.length > 1 ? 's' : '', " \xB7 ", f.actif ? 'Actif' : 'Inactif'));
  }), missingTypes.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => {
      const nf = LKE.addConsultForm(t);
      setSelId(nf.id);
    },
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      border: '1px dashed var(--hairline)',
      background: 'transparent',
      color: 'var(--ink-soft)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5
    }
  }, "+ Cr\xE9er le formulaire \xAB ", CT[t].label, " \xBB"))), form && /*#__PURE__*/React.createElement(ECard, {
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 18,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: form.titre,
    onChange: e => LKE.updateConsultForm(form.id, {
      titre: e.target.value
    }),
    style: {
      ...inputStyle,
      fontSize: 22,
      flex: 1,
      marginTop: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setPreview(p => !p),
    style: fbGhost
  }, preview ? 'Éditer' : 'Aperçu cliente'), /*#__PURE__*/React.createElement("button", {
    onClick: () => LKE.updateConsultForm(form.id, {
      actif: !form.actif
    }),
    style: {
      ...fbGhost,
      color: form.actif ? 'var(--color-indigo)' : 'var(--ink-soft)'
    }
  }, form.actif ? 'Actif' : 'Inactif'))), preview ? /*#__PURE__*/React.createElement(FormPreview, {
    form: form
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, form.questions.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 0',
      textAlign: 'center',
      color: 'var(--ink-soft)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 300
    }
  }, "Aucune question. Ajoutez-en une ci-dessous."), form.questions.map((q, i) => /*#__PURE__*/React.createElement(QuestionEditor, {
    key: q.id,
    form: form,
    q: q,
    index: i,
    last: i === form.questions.length - 1
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => LKE.addFormQuestion(form.id, {}),
    style: {
      background: 'var(--color-copper)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 18px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      cursor: 'pointer'
    }
  }, "+ Ajouter une question"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      if (confirm('Supprimer ce formulaire entier ?')) {
        LKE.removeConsultForm(form.id);
        setSelId(LKE.consultForms[0] ? LKE.consultForms[0].id : null);
      }
    },
    style: {
      ...fbGhost,
      color: '#a8324a',
      borderColor: 'var(--hairline)'
    }
  }, "Supprimer le formulaire")))));
}
function QuestionEditor({
  form,
  q,
  index,
  last
}) {
  const setQ = patch => LKE.updateFormQuestion(form.id, q.id, patch);
  const optsStr = (q.options || []).join(', ');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      marginBottom: 12,
      background: 'var(--color-ivoire)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      color: 'var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 12
    }
  }, index + 1), /*#__PURE__*/React.createElement("input", {
    value: q.label,
    onChange: e => setQ({
      label: e.target.value
    }),
    placeholder: "Intitul\xE9 de la question",
    style: {
      ...inputStyle,
      flex: 1,
      marginTop: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => LKE.moveFormQuestion(form.id, q.id, -1),
    disabled: index === 0,
    style: fbArrow(index === 0)
  }, "\u25B2"), /*#__PURE__*/React.createElement("button", {
    onClick: () => LKE.moveFormQuestion(form.id, q.id, 1),
    disabled: last,
    style: fbArrow(last)
  }, "\u25BC"), /*#__PURE__*/React.createElement("button", {
    onClick: () => LKE.removeFormQuestion(form.id, q.id),
    style: {
      ...fbArrow(false),
      color: '#a8324a'
    }
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: q.kind,
    onChange: e => setQ({
      kind: e.target.value
    }),
    style: fbSel
  }, Object.entries(KINDS).map(([k, l]) => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, l))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!q.req,
    onChange: e => setQ({
      req: e.target.checked
    })
  }), " Obligatoire")), NEEDS_OPTS(q.kind) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 4
    }
  }, "R\xE9ponses possibles (s\xE9par\xE9es par une virgule)"), /*#__PURE__*/React.createElement("input", {
    value: optsStr,
    onChange: e => setQ({
      options: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
    }),
    placeholder: "Option 1, Option 2, Option 3",
    style: {
      width: '100%',
      border: '1px solid var(--hairline)',
      borderRadius: 6,
      background: '#fff',
      padding: '8px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--color-indigo)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, (q.options || []).map((o, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--color-sable)',
      color: 'var(--color-indigo)'
    }
  }, o)))));
}
function FormPreview({
  form
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      marginBottom: 14
    }
  }, "Vu par la cliente"), form.questions.map((q, i) => /*#__PURE__*/React.createElement("div", {
    key: q.id,
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)',
      marginBottom: 8
    }
  }, i + 1, ". ", q.label, q.req && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-copper)'
    }
  }, " *")), q.kind === 'text' && /*#__PURE__*/React.createElement("input", {
    disabled: true,
    placeholder: "R\xE9ponse courte\u2026",
    style: fbPrevIn
  }), q.kind === 'textarea' && /*#__PURE__*/React.createElement("textarea", {
    disabled: true,
    placeholder: "R\xE9ponse d\xE9taill\xE9e\u2026",
    rows: 3,
    style: {
      ...fbPrevIn,
      resize: 'none'
    }
  }), q.kind === 'select' && /*#__PURE__*/React.createElement("select", {
    disabled: true,
    style: fbPrevIn
  }, (q.options || []).map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))), (q.kind === 'radio' || q.kind === 'checkbox') && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, (q.options || []).map(o => /*#__PURE__*/React.createElement("label", {
    key: o,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      border: '1.5px solid var(--color-copper)',
      borderRadius: q.kind === 'radio' ? '50%' : 4
    }
  }), o))))));
}
const fbGhost = {
  background: 'transparent',
  border: '1px solid var(--hairline)',
  borderRadius: 'var(--radius-pill)',
  padding: '8px 14px',
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  color: 'var(--color-indigo)',
  cursor: 'pointer'
};
const fbSel = {
  border: '1px solid var(--hairline)',
  borderRadius: 6,
  background: '#fff',
  padding: '7px 10px',
  fontFamily: 'var(--font-sans)',
  fontSize: 12.5,
  color: 'var(--color-indigo)',
  outline: 'none'
};
const fbArrow = dis => ({
  width: 26,
  height: 26,
  border: '1px solid var(--hairline)',
  borderRadius: 5,
  background: '#fff',
  cursor: dis ? 'not-allowed' : 'pointer',
  color: dis ? 'var(--hairline)' : 'var(--ink-soft)',
  fontSize: 10
});
const fbPrevIn = {
  width: '100%',
  border: '1px solid var(--hairline)',
  borderRadius: 6,
  background: 'var(--color-ivoire)',
  padding: '10px 12px',
  fontFamily: 'var(--font-sans)',
  fontSize: 13.5,
  color: 'var(--ink-soft)',
  outline: 'none'
};
Object.assign(window, {
  LK_Consultations: Consultations
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensE.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensF.jsx
try { (() => {
/* LOKAA Phase 1 — Screens F: Catalogue, Journal de caisse, Web analytics */
const {
  Button: FBtn,
  Badge: FBadge,
  Card: FCard,
  Filet: FFilet,
  Eyebrow: FEye
} = window.MNDDesignSystem_a962de;
const LKF = window.LOKAA;
const FF = LKF.FCFA;
function FTitle({
  k,
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FEye, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, children)), right);
}
const METHOD_LABEL = {
  momo: 'Mobile Money',
  cash: 'Espèces',
  card: 'Carte',
  whatsapp: 'WhatsApp'
};

/* ---------- CATALOGUE ---------- */
function Catalogue({
  go = () => {}
}) {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LKF.onData && LKF.onData(force), []);
  const [tab, setTab] = React.useState('services');
  const [collapsed, setCollapsed] = React.useState({});
  const [filter, setFilter] = React.useState('Toutes');
  const items = tab === 'services' ? LKF.catServices : LKF.catProducts;

  // Group items by category
  const cats = tab === 'services' ? LKF.getServiceCategories() : LKF.getProductCategories();
  const groupKey = it => tab === 'services' ? it.cat || 'Autres' : it.categorie || it.cat || 'Autres';
  const orderedCats = [...cats];
  items.forEach(it => {
    const k = groupKey(it);
    if (!orderedCats.includes(k)) orderedCats.push(k);
  });
  const groups = orderedCats.map(cat => ({
    cat,
    list: items.filter(it => groupKey(it) === cat)
  })).filter(g => g.list.length > 0 && (filter === 'Toutes' || g.cat === filter));
  const toggle = cat => setCollapsed(c => ({
    ...c,
    [cat]: !c[cat]
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FTitle, {
    k: "Catalogue \xB7 offre de la Maison",
    right: /*#__PURE__*/React.createElement(FBtn, {
      variant: "copper",
      onClick: () => go('gestion')
    }, "G\xE9rer le catalogue")
  }, "Catalogue."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--hairline)',
      marginBottom: 18
    }
  }, [['services', 'Services'], ['produits', 'Produits']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => {
      setTab(id);
      setFilter('Toutes');
    },
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 13px',
      marginRight: 26,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: tab === id ? 'var(--color-indigo)' : 'var(--ink-soft)',
      borderBottom: '2px solid ' + (tab === id ? 'var(--color-copper)' : 'transparent'),
      marginBottom: -1
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7,
      marginBottom: 20
    }
  }, ['Toutes', ...orderedCats.filter(c => items.some(it => groupKey(it) === c))].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setFilter(c),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (filter === c ? 'var(--color-copper)' : 'var(--hairline)'),
      background: filter === c ? 'var(--color-indigo)' : 'transparent',
      color: filter === c ? 'var(--color-ivoire)' : 'var(--ink-soft)'
    }
  }, c, c !== 'Toutes' ? ` · ${items.filter(it => groupKey(it) === c).length}` : ''))), groups.map(({
    cat,
    list
  }) => /*#__PURE__*/React.createElement("div", {
    key: cat,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => toggle(cat),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      borderBottom: '2px solid var(--color-copper)',
      padding: '0 0 9px',
      marginBottom: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--color-copper)',
      transform: collapsed[cat] ? 'rotate(-90deg)' : 'none',
      transition: 'transform 150ms'
    }
  }, "\u25BE"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)'
    }
  }, cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.1em',
      color: 'var(--ink-soft)'
    }
  }, list.length, " ", tab === 'services' ? 'services' : 'produits')), !collapsed[cat] && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 14
    }
  }, list.map(it => /*#__PURE__*/React.createElement(FCard, {
    key: it.id,
    padding: 20,
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, tab === 'services' ? it.duree + (it.sessions > 1 ? ` · ${it.sessions} sessions` : '') : it.contenance), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)',
      marginTop: 3
    }
  }, it.nom)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      color: 'var(--color-copper)',
      whiteSpace: 'nowrap',
      marginLeft: 12
    }
  }, FF(it.prix))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)',
      margin: '0 0 12px'
    }
  }, it.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--hairline)',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)'
    }
  }, tab === 'produits' ? `Stock : ${it.stock}` : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, tab === 'services' && it.skill && /*#__PURE__*/React.createElement(FBadge, {
    tone: "indigo",
    size: "sm"
  }, it.skill), /*#__PURE__*/React.createElement("button", {
    onClick: () => go('gestion'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--color-copper)'
    }
  }, "Modifier")))))))));
}

/* ---------- JOURNAL DE CAISSE ---------- */
function CashJournal() {
  const [rows, setRows] = React.useState(LKF.getCash());
  React.useEffect(() => LKF.onCash(r => setRows([...r])), []);
  const byMethod = {};
  rows.forEach(r => {
    byMethod[r.method] = (byMethod[r.method] || 0) + r.amount;
  });
  const total = rows.reduce((s, r) => s + r.amount, 0);
  const fmtMethods = Object.keys(METHOD_LABEL);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FTitle, {
    k: "Caisse \xB7 journal du jour \xB7 jeu. 26 juin",
    right: /*#__PURE__*/React.createElement(FBtn, {
      variant: "secondary"
    }, "Cl\xF4turer la caisse")
  }, "Journal de caisse."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(FCard, {
    padding: 20,
    topFilet: true,
    style: {
      flex: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Total encaiss\xE9 \xB7 jour"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 40,
      color: 'var(--color-indigo)',
      marginTop: 8
    }
  }, FF(total)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--accent-strong)',
      marginTop: 6
    }
  }, rows.length, " transactions")), fmtMethods.map(m => /*#__PURE__*/React.createElement(FCard, {
    key: m,
    padding: 20,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, METHOD_LABEL[m]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)',
      marginTop: 8
    }
  }, FF(byMethod[m] || 0))))), /*#__PURE__*/React.createElement(FCard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 80px 1.6fr 1fr 1fr',
      padding: '13px 22px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "N\xB0"), /*#__PURE__*/React.createElement("span", null, "Heure"), /*#__PURE__*/React.createElement("span", null, "D\xE9tail"), /*#__PURE__*/React.createElement("span", null, "Paiement"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Montant")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 80px 1.6fr 1fr 1fr',
      padding: '14px 22px',
      borderTop: '1px solid var(--hairline)',
      alignItems: 'center',
      background: i === 0 ? 'var(--copper-50)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, monospace',
      fontSize: 12,
      color: 'var(--color-copper)'
    }
  }, r.id), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, r.t), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)'
    }
  }, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)',
      display: 'block'
    }
  }, r.client)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(FBadge, {
    tone: r.method === 'momo' ? 'solid' : 'outline',
    size: "sm"
  }, METHOD_LABEL[r.method])), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, FF(r.amount))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: 'var(--color-copper)',
      transform: 'rotate(45deg)'
    }
  }), "Chaque encaissement POS s'ajoute ici automatiquement en haut du journal."));
}

/* ---------- WEB ANALYTICS ---------- */
function WebAnalytics() {
  const w = LKF.webAnalytics;
  const maxFunnel = w.funnel[0][1];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FTitle, {
    k: "Audience web \xB7 site & r\xE9servation"
  }, "Activit\xE9 du site."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 22
    }
  }, [['Visites · 30 j', w.kpis.visites.toLocaleString('fr-FR')], ['Visiteurs uniques', w.kpis.visiteurs.toLocaleString('fr-FR')], ['Réservations', w.kpis.booking], ['Taux conversion', Math.round(w.kpis.tauxConv * 100) + '%'], ['Durée moyenne', w.kpis.dureeMoy]].map((k, i) => /*#__PURE__*/React.createElement(FCard, {
    key: i,
    padding: 18,
    topFilet: i === 0,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, k[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 30,
      color: 'var(--color-indigo)',
      marginTop: 8
    }
  }, k[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 22,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(FCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 20,
      color: 'var(--color-indigo)',
      margin: '0 0 16px'
    }
  }, "Pages \xB7 vues & temps pass\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr',
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      paddingBottom: 8,
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Page"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Vues"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Temps moyen")), w.pages.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '11px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, p.page), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, p.vues.toLocaleString('fr-FR')), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-copper)'
    }
  }, p.duree)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: 'var(--hairline)',
      borderRadius: 2,
      marginTop: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: p.part * 100 + '%',
      height: '100%',
      background: 'var(--color-copper)'
    }
  }))))), /*#__PURE__*/React.createElement(FCard, {
    surface: "deep",
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#1F8A5B'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "En ligne maintenant \xB7 ", w.live.length)), w.live.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'flex-start',
      padding: '11px 0',
      borderTop: i ? '1px solid var(--hairline-invert)' : 'none'
    }
  }, v.known ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${LKF.clientById(v.clientId).photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: '0 0 auto',
      border: '1px solid var(--color-copper)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--obsidian-200)',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--indigo-100)'
    }
  }, "?"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: v.known ? 'var(--color-ivoire)' : 'var(--indigo-100)'
    }
  }, v.who), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: 'var(--color-copper)'
    }
  }, v.duree)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--indigo-100)'
    }
  }, v.page, " \xB7 ", v.ville), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--copper-200)',
      marginTop: 2,
      fontStyle: 'italic'
    }
  }, v.action), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      color: 'var(--indigo-200)',
      marginTop: 2
    }
  }, v.device)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      color: 'var(--indigo-200)',
      lineHeight: 1.5
    }
  }, "Les clientes connect\xE9es (compte ou cookie reconnu) sont nomm\xE9es ; les autres restent anonymes jusqu'\xE0 conversion."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 22,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(FCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 20,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "SEO \xB7 sant\xE9 du site"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 32,
      color: 'var(--color-copper)'
    }
  }, w.seo.score), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, "/100"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, "Core Web Vitals"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 18
    }
  }, w.seo.vitals.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--color-sable)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      color: 'var(--ink-soft)'
    }
  }, v[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#1F8A5B'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, v[1]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 8
    }
  }, "Checklist technique"), w.seo.checklist.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 10,
      color: '#fff',
      background: c[1] ? '#1F8A5B' : 'var(--obsidian-200)'
    }
  }, c[1] ? '✓' : '!'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: c[1] ? 'var(--ink)' : 'var(--ink-soft)'
    }
  }, c[0])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(FCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 20,
      color: 'var(--color-indigo)',
      margin: '0 0 14px'
    }
  }, "Mots-cl\xE9s \xB7 position Google"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 0.6fr 0.8fr 0.5fr',
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      paddingBottom: 8,
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Mot-cl\xE9"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, "Pos."), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Vol./mois"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, "Tend.")), w.seo.keywords.map((k, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 0.6fr 0.8fr 0.5fr',
      alignItems: 'center',
      padding: '10px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, k[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: k[1] <= 3 ? 'var(--color-copper)' : 'var(--color-indigo)'
    }
  }, k[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, k[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center',
      color: k[3] === 'up' ? '#1F8A5B' : k[3] === 'down' ? 'var(--copper-700)' : 'var(--ink-soft)'
    }
  }, k[3] === 'up' ? '▲' : k[3] === 'down' ? '▼' : '—')))), /*#__PURE__*/React.createElement(FCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 18,
      color: 'var(--color-indigo)',
      margin: '0 0 12px'
    }
  }, "Aper\xE7u Google"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-ivoire)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'arial, sans-serif',
      fontSize: 13,
      color: '#1a0dab'
    }
  }, w.seo.meta.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'arial, sans-serif',
      fontSize: 11.5,
      color: '#006621',
      margin: '2px 0'
    }
  }, "https://mnd.bj"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'arial, sans-serif',
      fontSize: 12,
      color: '#4d5156',
      lineHeight: 1.4
    }
  }, w.seo.meta.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Titre : ", w.seo.meta.titleLen, "/60"), /*#__PURE__*/React.createElement("span", null, "Description : ", w.seo.meta.descLen, "/160"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(FCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 20,
      color: 'var(--color-indigo)',
      margin: '0 0 16px'
    }
  }, "Entonnoir \xB7 de la visite au RDV"), w.funnel.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, f[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      color: 'var(--color-indigo)'
    }
  }, f[1].toLocaleString('fr-FR'))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--hairline)',
      borderRadius: 4,
      marginTop: 5,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: f[1] / maxFunnel * 100 + '%',
      height: '100%',
      background: i === w.funnel.length - 1 ? 'var(--color-copper)' : 'var(--color-indigo)'
    }
  }))))), /*#__PURE__*/React.createElement(FCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 20,
      color: 'var(--color-indigo)',
      margin: '0 0 16px'
    }
  }, "Sources de trafic"), w.sources.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, s[0]), /*#__PURE__*/React.createElement("span", null, s[1], "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--hairline)',
      borderRadius: 3,
      marginTop: 5,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: s[1] + '%',
      height: '100%',
      background: 'var(--color-copper)'
    }
  })))))));
}
Object.assign(window, {
  LK_Catalogue: Catalogue,
  LK_CashJournal: CashJournal,
  LK_WebAnalytics: WebAnalytics
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensF.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensG.jsx
try { (() => {
/* LOKAA Phase 1 — Screens G: Marketing Templates, WhatsApp chat, Payments settings */
const {
  Button: GBtn,
  Badge: GBadge,
  Card: GCard,
  Filet: GFilet,
  Eyebrow: GEye
} = window.MNDDesignSystem_a962de;
const LKG = window.LOKAA;
function GTitle({
  k,
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GEye, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, children)), right);
}

/* ---------- MARKETING TEMPLATES (email & SMS) ---------- */
function Templates() {
  const [list, setList] = React.useState(LKG.getTemplates());
  const [selId, setSelId] = React.useState(list[0].id);
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(null);
  const [saved, setSaved] = React.useState(false);
  React.useEffect(() => LKG.onTemplates(t => setList([...t])), []);
  const B = LKG.getBrand();
  const sel = list.find(t => t.id === selId) || list[0];
  const startEdit = () => {
    setDraft({
      ...sel
    });
    setEditing(true);
  };
  const startNew = () => {
    setDraft({
      id: '',
      canal: 'SMS',
      nom: 'Nouveau modèle',
      objet: '',
      corps: '',
      tags: [],
      statut: 'Brouillon'
    });
    setEditing(true);
  };
  const save = () => {
    LKG.saveTemplate(draft);
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
    if (draft.id) setSelId(draft.id);
  };
  const CANAL_TONE = {
    SMS: 'indigo',
    Email: 'copper',
    WhatsApp: 'solid'
  };
  const cur = editing ? draft : sel;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GTitle, {
    k: "Marketing \xB7 communication de marque",
    right: /*#__PURE__*/React.createElement(GBtn, {
      variant: "copper",
      onClick: startNew
    }, "+ Nouveau mod\xE8le")
  }, "Mod\xE8les email & SMS."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, list.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => {
      setSelId(t.id);
      setEditing(false);
    },
    style: {
      textAlign: 'left',
      cursor: 'pointer',
      padding: '13px 15px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (t.id === selId ? 'var(--color-copper)' : 'var(--hairline)'),
      background: t.id === selId ? 'var(--color-ivoire)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement(GBadge, {
    tone: CANAL_TONE[t.canal],
    size: "sm"
  }, t.canal), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      color: t.statut === 'Actif' ? 'var(--accent-strong)' : 'var(--ink-soft)'
    }
  }, t.statut)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)'
    }
  }, t.nom)))), /*#__PURE__*/React.createElement(GCard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: B.colors.indigo,
      padding: '18px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: B.logo === 'app-icon.png' ? '../../assets/logos/app-icon.png' : `../../assets/monograms/${B.mono}`,
    alt: "",
    style: {
      width: 30,
      height: 30,
      borderRadius: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      letterSpacing: '0.12em',
      color: B.colors.ivoire
    }
  }, B.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: B.colors.copper
    }
  }, cur.canal, " \xB7 mod\xE8le de marque")), editing ? /*#__PURE__*/React.createElement(GBtn, {
    size: "sm",
    variant: "copper",
    onClick: save
  }, "Enregistrer") : /*#__PURE__*/React.createElement(GBtn, {
    size: "sm",
    variant: "secondary",
    onClick: startEdit,
    style: {
      color: 'var(--color-ivoire)',
      borderColor: 'rgba(246,241,231,0.3)'
    }
  }, "Modifier")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 26px'
    }
  }, saved && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--copper-50)',
      border: '1px solid var(--copper-100)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 14px',
      marginBottom: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--copper-700)'
    }
  }, "\u2713 Mod\xE8le enregistr\xE9."), editing && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16
    }
  }, ['SMS', 'Email', 'WhatsApp'].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setDraft({
      ...draft,
      canal: c
    }),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '7px 14px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid ' + (draft.canal === c ? 'var(--color-copper)' : 'var(--hairline)'),
      background: draft.canal === c ? 'var(--copper-50)' : 'transparent',
      color: draft.canal === c ? 'var(--copper-700)' : 'var(--ink-soft)'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: lblG
  }, "Nom du mod\xE8le"), editing ? /*#__PURE__*/React.createElement("input", {
    value: draft.nom,
    onChange: e => setDraft({
      ...draft,
      nom: e.target.value
    }),
    style: inG
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-indigo)',
      marginBottom: 18
    }
  }, sel.nom), cur.canal === 'Email' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: lblG
  }, "Objet"), editing ? /*#__PURE__*/React.createElement("input", {
    value: draft.objet,
    onChange: e => setDraft({
      ...draft,
      objet: e.target.value
    }),
    style: inG
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)',
      marginBottom: 18
    }
  }, sel.objet)), /*#__PURE__*/React.createElement("div", {
    style: lblG
  }, "Message"), editing ? /*#__PURE__*/React.createElement("textarea", {
    value: draft.corps,
    onChange: e => setDraft({
      ...draft,
      corps: e.target.value
    }),
    rows: 5,
    style: {
      width: '100%',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-ivoire)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--ink)',
      padding: '12px 14px',
      resize: 'vertical',
      outline: 'none',
      lineHeight: 1.6
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-sable)',
      borderRadius: 'var(--radius-md)',
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14.5,
      lineHeight: 1.7,
      color: 'var(--ink)',
      margin: 0
    }
  }, sel.corps), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid var(--hairline)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/monograms/${B.mono}`,
    alt: "",
    style: {
      width: 18
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 13,
      color: B.colors.copper
    }
  }, B.signature))), !!(cur.tags && cur.tags.length) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lblG
  }, "Variables disponibles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, cur.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'ui-monospace, monospace',
      fontSize: 11.5,
      color: 'var(--copper-700)',
      background: 'var(--copper-50)',
      border: '1px solid var(--copper-100)',
      borderRadius: 4,
      padding: '3px 9px'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: 'var(--color-copper)',
      transform: 'rotate(45deg)'
    }
  }), "Chaque envoi porte automatiquement le logo et la charte du compte actif.")))));
}
const lblG = {
  fontFamily: 'var(--font-sans)',
  fontSize: 10,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: 8
};
const inG = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid var(--color-copper)',
  background: 'transparent',
  fontFamily: 'var(--font-serif)',
  fontSize: 18,
  color: 'var(--color-indigo)',
  padding: '4px 0',
  marginBottom: 18,
  outline: 'none'
};

/* ---------- WHATSAPP CHAT PANEL ---------- */
function WhatsAppPanel({
  onClose
}) {
  const [selId, setSelId] = React.useState(LKG.waThreads[0].id);
  const [threads, setThreads] = React.useState(LKG.waThreads.map(t => ({
    ...t,
    msgs: [...t.msgs]
  })));
  const [text, setText] = React.useState('');
  const wa = LKG.waConnected;
  const sel = threads.find(t => t.id === selId);
  const send = () => {
    if (!text.trim()) return;
    setThreads(ts => ts.map(t => t.id === selId ? {
      ...t,
      msgs: [...t.msgs, {
        me: true,
        txt: text,
        t: 'maintenant'
      }],
      last: text,
      unread: 0
    } : t));
    setText('');
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 900,
      background: 'rgba(12,13,32,0.4)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(720px, 96vw)',
      zIndex: 1000,
      background: 'var(--color-ivoire)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px',
      borderBottom: '1px solid var(--hairline)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--color-indigo)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: '#25D366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.52 13.97c-.25.7-1.45 1.36-2 1.41-.55.06-1.06.27-3.57-.74-3.01-1.21-4.92-4.3-5.07-4.5-.15-.2-1.21-1.61-1.21-3.07 0-1.46.77-2.18 1.04-2.48.27-.3.59-.37.79-.37.2 0 .39.01.56.01.18 0 .42-.07.66.5.25.59.84 2.04.91 2.19.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.45.53-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.66-.15.27.1 1.71.81 2 .96.3.15.5.22.57.35.07.12.07.72-.18 1.42z"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-ivoire)'
    }
  }, "WhatsApp Business"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: '#25D366'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--indigo-100)'
    }
  }, "Connect\xE9 \xB7 ", wa.number)))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--indigo-100)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--hairline)',
      overflowY: 'auto'
    }
  }, threads.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setSelId(t.id),
    style: {
      width: '100%',
      textAlign: 'left',
      cursor: 'pointer',
      display: 'flex',
      gap: 11,
      padding: '13px 16px',
      border: 'none',
      borderBottom: '1px solid var(--hairline)',
      background: t.id === selId ? 'var(--color-sable)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${t.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, t.client), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      color: 'var(--ink-soft)'
    }
  }, t.t)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: 150
    }
  }, t.last), t.unread > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 16,
      height: 16,
      borderRadius: '50%',
      background: '#25D366',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4px'
    }
  }, t.unread)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      background: 'var(--color-sable)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, sel.msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      alignSelf: m.me ? 'flex-end' : 'flex-start',
      maxWidth: '75%',
      background: m.me ? '#DCF8C6' : 'var(--color-ivoire)',
      borderRadius: m.me ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
      padding: '9px 13px',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: '#111',
      lineHeight: 1.45
    }
  }, m.txt), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      color: '#667',
      textAlign: 'right',
      marginTop: 3
    }
  }, m.t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderTop: '1px solid var(--hairline)',
      display: 'flex',
      gap: 10,
      background: 'var(--color-ivoire)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: e => setText(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send(),
    placeholder: "\xC9crire un message\u2026",
    style: {
      flex: 1,
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      outline: 'none',
      color: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: 'none',
      background: '#25D366',
      color: '#fff',
      cursor: 'pointer',
      fontSize: 18,
      flex: '0 0 auto'
    }
  }, "\u27A4"))))));
}

/* ---------- PAYMENTS SETTINGS PANEL ---------- */
function PaymentsSettings() {
  const [provs, setProvs] = React.useState(LKG.paymentProviders.map(p => ({
    ...p
  })));
  const toggle = id => setProvs(ps => ps.map(p => p.id === id ? {
    ...p,
    on: !p.on
  } : p));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 16
    }
  }, "Moyens de paiement \xB7 B\xE9nin & Afrique de l'Ouest"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, provs.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 18px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (p.on ? 'var(--color-copper)' : 'var(--hairline)'),
      background: p.on ? 'var(--color-ivoire)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 8,
      background: p.on ? 'var(--color-indigo)' : 'var(--obsidian-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: p.on ? 'var(--color-copper)' : 'var(--ink-soft)'
    }
  }, p.nom[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)'
    }
  }, p.nom), /*#__PURE__*/React.createElement(GBadge, {
    tone: "indigo",
    size: "sm"
  }, p.type)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, p.desc, " \xB7 frais ", p.frais)), /*#__PURE__*/React.createElement("button", {
    onClick: () => toggle(p.id),
    style: {
      width: 42,
      height: 24,
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      background: p.on ? 'var(--color-copper)' : 'var(--obsidian-200)',
      position: 'relative',
      transition: 'background 200ms',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: p.on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 200ms'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      lineHeight: 1.6
    }
  }, "Les moyens actifs apparaissent \xE0 l'encaissement (POS) et sur les liens de paiement WhatsApp. KkiaPay agr\xE8ge cartes et wallets en un seul lien partageable."));
}
Object.assign(window, {
  LK_Templates: Templates,
  LK_WhatsApp: WhatsAppPanel,
  LK_PaymentsSettings: PaymentsSettings
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensG.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensH.jsx
try { (() => {
/* LOKAA Phase 1 — Screens H: Dépenses (SYSCOHADA) + vues de synthèse */
const {
  Button: HBtn,
  Badge: HBadge,
  Card: HCard,
  Filet: HFilet,
  Eyebrow: HEye
} = window.MNDDesignSystem_a962de;
const LKH = window.LOKAA;
const FH = LKH.FCFA;
function HTitle({
  k,
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HEye, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, children)), right);
}
const MTH = {
  momo: 'Mobile Money',
  cash: 'Espèces',
  card: 'Carte',
  virement: 'Virement'
};

/* ---------- DÉPENSES (SYSCOHADA classe 6) ---------- */
function Expenses() {
  const [rows, setRows] = React.useState(LKH.getExpenses());
  const [filter, setFilter] = React.useState('tous');
  const [adding, setAdding] = React.useState(false);
  const [mode, setMode] = React.useState('depenses');
  React.useEffect(() => LKH.onExpenses(r => setRows([...r])), []);
  const cats = LKH.expenseCats;
  const total = rows.reduce((s, e) => s + e.amount, 0);
  const byCat = cats.map(c => ({
    ...c,
    total: rows.filter(e => e.cat === c.code).reduce((s, e) => s + e.amount, 0)
  })).filter(c => c.total > 0).sort((a, b) => b.total - a.total);
  const shown = filter === 'tous' ? rows : rows.filter(e => e.cat === filter);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HTitle, {
    k: "Comptabilit\xE9 \xB7 plan comptable SYSCOHADA r\xE9vis\xE9",
    right: mode === 'depenses' ? /*#__PURE__*/React.createElement(HBtn, {
      variant: "copper",
      onClick: () => setAdding(!adding)
    }, "+ D\xE9pense") : null
  }, mode === 'depenses' ? 'Dépenses.' : 'Plan comptable.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 22
    }
  }, [['depenses', 'Dépenses (classe 6)'], ['plan', 'Plan comptable · 8 classes']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setMode(k),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      padding: '9px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (mode === k ? 'var(--color-copper)' : 'var(--hairline)'),
      background: mode === k ? 'var(--color-copper)' : 'transparent',
      color: mode === k ? '#fff' : 'var(--ink-soft)',
      fontWeight: mode === k ? 600 : 400
    }
  }, l))), mode === 'plan' && /*#__PURE__*/React.createElement(PlanComptable, null), mode === 'depenses' && /*#__PURE__*/React.createElement(React.Fragment, null, adding && /*#__PURE__*/React.createElement(AddExpense, {
    onDone: () => setAdding(false)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.6fr',
      gap: 22,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(HCard, {
    surface: "deep",
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Total d\xE9penses \xB7 juin"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 46,
      color: 'var(--color-ivoire)',
      margin: '8px 0 4px'
    }
  }, FH(total)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--indigo-100)'
    }
  }, rows.length, " \xE9critures \xB7 ", byCat.length, " postes"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '18px 0'
    }
  }, /*#__PURE__*/React.createElement(HFilet, {
    variant: "copper"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--indigo-100)',
      lineHeight: 1.6
    }
  }, "Le plus gros poste : ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-ivoire)',
      fontWeight: 500
    }
  }, byCat[0]?.nom), " (", Math.round(byCat[0]?.total / total * 100), "%).")), /*#__PURE__*/React.createElement(HCard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 20,
      color: 'var(--color-indigo)',
      margin: '0 0 16px'
    }
  }, "O\xF9 va l'argent \xB7 par compte"), byCat.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.code,
    onClick: () => setFilter(filter === c.code ? 'tous' : c.code),
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '7px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, monospace',
      fontSize: 11,
      color: 'var(--ink-soft)'
    }
  }, c.code), c.nom, filter === c.code && /*#__PURE__*/React.createElement(HBadge, {
    tone: "copper",
    size: "sm"
  }, "filtr\xE9")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)'
    }
  }, FH(c.total))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      background: 'var(--hairline)',
      borderRadius: 4,
      marginTop: 5,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: c.total / total * 100 + '%',
      height: '100%',
      background: c.couleur
    }
  })))))), /*#__PURE__*/React.createElement(HCard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '90px 90px 1.7fr 1.2fr 1fr',
      padding: '13px 22px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Pi\xE8ce"), /*#__PURE__*/React.createElement("span", null, "Compte"), /*#__PURE__*/React.createElement("span", null, "Libell\xE9"), /*#__PURE__*/React.createElement("span", null, "Sous-compte"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Montant")), shown.map((e, i) => {
    const sub = LKH.subByCode(e.cat, e.sub);
    const cat = LKH.catByCode(e.cat);
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: {
        display: 'grid',
        gridTemplateColumns: '90px 90px 1.7fr 1.2fr 1fr',
        padding: '13px 22px',
        borderTop: '1px solid var(--hairline)',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'ui-monospace, monospace',
        fontSize: 11.5,
        color: 'var(--color-copper)'
      }
    }, e.id), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: cat.couleur
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'ui-monospace, monospace',
        fontSize: 12,
        color: 'var(--ink)'
      }
    }, e.sub)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 15,
        color: 'var(--color-indigo)'
      }
    }, e.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--ink-soft)',
        display: 'block'
      }
    }, new Date(e.date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short'
    }), " \xB7 ", MTH[e.method])), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 300,
        color: 'var(--ink-soft)'
      }
    }, sub ? sub.nom : '—'), /*#__PURE__*/React.createElement("span", {
      style: {
        textAlign: 'right',
        fontFamily: 'var(--font-serif)',
        fontSize: 16,
        color: 'var(--color-indigo)'
      }
    }, FH(e.amount)));
  }))));
}

/* ---------- PLAN COMPTABLE SYSCOHADA · 8 classes ---------- */
function PlanComptable() {
  const plan = LKH.SYSCOHADA_PLAN;
  const [open, setOpen] = React.useState('6');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HCard, {
    padding: 22,
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13,
      color: 'var(--ink-soft)',
      lineHeight: 1.6
    }
  }, "R\xE9f\xE9rentiel ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-indigo)',
      fontWeight: 500
    }
  }, "SYSCOHADA r\xE9vis\xE9"), " (OHADA) \u2014 les 8 classes du plan comptable. Les classes 1 \xE0 5 forment le ", /*#__PURE__*/React.createElement("em", null, "bilan"), ", les classes 6 \xE0 8 le ", /*#__PURE__*/React.createElement("em", null, "compte de r\xE9sultat"), ". Vos d\xE9penses sont rattach\xE9es \xE0 la classe 6.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, plan.map(cl => {
    const isOpen = open === cl.cls;
    return /*#__PURE__*/React.createElement(HCard, {
      key: cl.cls,
      padding: 0,
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : cl.cls),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '16px 20px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        flex: '0 0 auto',
        borderRadius: 8,
        background: cl.couleur,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-serif)',
        fontSize: 18
      }
    }, cl.cls), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-serif)',
        fontSize: 18,
        color: 'var(--color-indigo)'
      }
    }, "Classe ", cl.cls, " \xB7 ", cl.nom), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)'
      }
    }, cl.desc)), /*#__PURE__*/React.createElement(HBadge, {
      tone: "indigo",
      size: "sm"
    }, cl.type), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 16,
        color: 'var(--ink-soft)',
        transform: isOpen ? 'rotate(90deg)' : 'none',
        transition: 'transform 150ms'
      }
    }, "\u203A")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--hairline)',
        padding: '6px 20px 14px'
      }
    }, cl.comptes.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.code,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '9px 0',
        borderBottom: '1px solid var(--color-sable)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'ui-monospace, monospace',
        fontSize: 13,
        color: cl.couleur,
        width: 36,
        flex: '0 0 auto'
      }
    }, c.code), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        color: 'var(--ink)'
      }
    }, c.nom)))));
  })));
}
function AddExpense({
  onDone
}) {
  const cats = LKH.expenseCats;
  const [cat, setCat] = React.useState(cats[0]);
  const [sub, setSub] = React.useState(cats[0].subs[0].code);
  const [label, setLabel] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [method, setMethod] = React.useState('momo');
  const submit = () => {
    if (!label || !amount) return;
    LKH.addExpense({
      cat: cat.code,
      sub,
      label,
      amount: parseInt(amount, 10) || 0,
      method
    });
    onDone();
  };
  return /*#__PURE__*/React.createElement(HCard, {
    padding: 24,
    style: {
      marginBottom: 22,
      border: '1px solid var(--color-copper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-indigo)',
      marginBottom: 16
    }
  }, "Nouvelle d\xE9pense"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lblH
  }, "Compte (classe 6)"), /*#__PURE__*/React.createElement("select", {
    value: cat.code,
    onChange: e => {
      const c = cats.find(x => x.code === e.target.value);
      setCat(c);
      setSub(c.subs[0].code);
    },
    style: selH
  }, cats.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.code,
    value: c.code
  }, c.code, " \xB7 ", c.nom)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lblH
  }, "Sous-compte"), /*#__PURE__*/React.createElement("select", {
    value: sub,
    onChange: e => setSub(e.target.value),
    style: selH
  }, cat.subs.map(s => /*#__PURE__*/React.createElement("option", {
    key: s.code,
    value: s.code
  }, s.code, " \xB7 ", s.nom))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 16,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lblH
  }, "Libell\xE9"), /*#__PURE__*/React.createElement("input", {
    value: label,
    onChange: e => setLabel(e.target.value),
    placeholder: "Ex. R\xE9appro plantes",
    style: inH
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lblH
  }, "Montant (F)"), /*#__PURE__*/React.createElement("input", {
    value: amount,
    onChange: e => setAmount(e.target.value.replace(/\D/g, '')),
    placeholder: "0",
    style: inH
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lblH
  }, "Paiement"), /*#__PURE__*/React.createElement("select", {
    value: method,
    onChange: e => setMethod(e.target.value),
    style: selH
  }, Object.entries(MTH).map(([k, v]) => /*#__PURE__*/React.createElement("option", {
    key: k,
    value: k
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "copper",
    onClick: submit
  }, "Enregistrer l'\xE9criture"), /*#__PURE__*/React.createElement(HBtn, {
    variant: "ghost",
    onClick: onDone
  }, "Annuler")));
}
const lblH = {
  fontFamily: 'var(--font-sans)',
  fontSize: 9.5,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--ink-soft)',
  marginBottom: 6
};
const inH = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid var(--hairline)',
  background: 'transparent',
  fontFamily: 'var(--font-serif)',
  fontSize: 17,
  color: 'var(--color-indigo)',
  padding: '5px 0',
  outline: 'none'
};
const selH = {
  width: '100%',
  border: '1px solid var(--hairline)',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--color-ivoire)',
  fontFamily: 'var(--font-sans)',
  fontSize: 13,
  color: 'var(--ink)',
  padding: '9px 10px',
  outline: 'none'
};

/* ---------- VUE DE SYNTHÈSE (revenus / dépenses / résultat) ---------- */
function Summary({
  prefill
}) {
  const tab0 = prefill && prefill.tab || 'revenus';
  const [tab, setTab] = React.useState(tab0);
  React.useEffect(() => {
    if (prefill && prefill.tab) setTab(prefill.tab);
  }, [prefill]);
  const rev = LKH.totalRevenue(),
    exp = LKH.totalExpenses(),
    net = LKH.netResult();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HTitle, {
    k: "Synth\xE8se \xB7 juin 2026"
  }, "R\xE9sultat de la Maison."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 24
    }
  }, [['revenus', 'Revenus réels', rev, 'var(--color-indigo)'], ['depenses', 'Dépenses réelles', exp, 'var(--color-copper)'], ['net', 'Résultat net', net, net >= 0 ? '#1F8A5B' : '#B23A48']].map(([id, lab, val, col]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      flex: 1,
      textAlign: 'left',
      cursor: 'pointer',
      background: tab === id ? 'var(--color-ivoire)' : 'transparent',
      border: '1px solid ' + (tab === id ? 'var(--color-copper)' : 'var(--hairline)'),
      borderRadius: 'var(--radius-md)',
      padding: '22px 24px',
      borderTop: '3px solid ' + col
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, lab), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 38,
      color: col,
      marginTop: 8
    }
  }, FH(val)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--accent)',
      marginTop: 6
    }
  }, "Cliquer pour le d\xE9tail \u2192")))), tab === 'revenus' && /*#__PURE__*/React.createElement(RevDetail, null), tab === 'depenses' && /*#__PURE__*/React.createElement(ExpDetail, null), tab === 'net' && /*#__PURE__*/React.createElement(NetDetail, {
    rev: rev,
    exp: exp,
    net: net
  }));
}
function RevDetail() {
  const streams = LKH.revenueStreams;
  const tot = LKH.totalRevenue();
  return /*#__PURE__*/React.createElement(HCard, {
    padding: 26
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 21,
      color: 'var(--color-indigo)',
      margin: '0 0 18px'
    }
  }, "Revenus par flux"), streams.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, r.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, FH(r.amount))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--hairline)',
      borderRadius: 3,
      marginTop: 6,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: r.amount / tot * 100 + '%',
      height: '100%',
      background: 'var(--color-indigo)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 16,
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, FH(tot))));
}
function ExpDetail() {
  const cats = LKH.expenseCats;
  const rows = LKH.getExpenses();
  const tot = LKH.totalExpenses();
  const byCat = cats.map(c => ({
    ...c,
    total: rows.filter(e => e.cat === c.code).reduce((s, e) => s + e.amount, 0)
  })).filter(c => c.total > 0).sort((a, b) => b.total - a.total);
  return /*#__PURE__*/React.createElement(HCard, {
    padding: 26
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 21,
      color: 'var(--color-indigo)',
      margin: '0 0 18px'
    }
  }, "D\xE9penses par compte SYSCOHADA"), byCat.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.code,
    style: {
      padding: '12px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, monospace',
      fontSize: 11,
      color: 'var(--ink-soft)',
      marginRight: 8
    }
  }, c.code), c.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, FH(c.total))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--hairline)',
      borderRadius: 3,
      marginTop: 6,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: c.total / tot * 100 + '%',
      height: '100%',
      background: c.couleur
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 16,
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-copper)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, FH(tot))));
}
function NetDetail({
  rev,
  exp,
  net
}) {
  const margin = Math.round(net / rev * 100);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(HCard, {
    padding: 26
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 21,
      color: 'var(--color-indigo)',
      margin: '0 0 18px'
    }
  }, "Du revenu au r\xE9sultat net"), [['Revenus réels', rev, 'var(--color-indigo)', 100], ['− Dépenses réelles', -exp, 'var(--color-copper)', Math.round(exp / rev * 100)], ['= Résultat net', net, '#1F8A5B', margin]].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '14px 0',
      borderBottom: i < 2 ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: r[2]
    }
  }, FH(r[1]))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--hairline)',
      borderRadius: 4,
      marginTop: 7,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.abs(r[3]) + '%',
      height: '100%',
      background: r[2]
    }
  }))))), /*#__PURE__*/React.createElement(HCard, {
    surface: "deep",
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Marge nette"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 56,
      color: 'var(--color-ivoire)',
      margin: '6px 0'
    }
  }, margin, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0'
    }
  }, /*#__PURE__*/React.createElement(HFilet, {
    variant: "copper"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      marginBottom: 8
    }
  }, "Piste de progression"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13,
      lineHeight: 1.65,
      color: 'var(--indigo-100)',
      margin: 0
    }
  }, "Les charges de personnel (66) et le loyer (62) p\xE8sent le plus. Augmenter le panier moyen via les soins premium et la vente gamme am\xE9liorerait la marge sans alourdir les charges fixes. Objectif : marge nette > 35%.")));
}
Object.assign(window, {
  LK_Expenses: Expenses,
  LK_Summary: Summary
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensH.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensI.jsx
try { (() => {
/* LOKAA Phase 1 — Screens I: Parrainage & Fidélité, Forfaits & Abonnements */
const {
  Button: IBtn,
  Badge: IBadge,
  Card: ICard,
  Filet: IFilet,
  Eyebrow: IEye
} = window.MNDDesignSystem_a962de;
const LKI = window.LOKAA;
const FI = LKI.FCFA;
function ITitle({
  k,
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IEye, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, children)), right);
}

/* ---------- PARRAINAGE & FIDÉLITÉ ---------- */
function Referral() {
  const [tab, setTab] = React.useState('parrainage');
  const tiers = LKI.loyaltyTiers;
  const totalFilleuls = LKI.referrals.reduce((s, r) => s + r.filleuls, 0);
  const totalValides = LKI.referrals.reduce((s, r) => s + r.valides, 0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ITitle, {
    k: "Communaut\xE9 \xB7 parrainage & fid\xE9lit\xE9",
    right: /*#__PURE__*/React.createElement(IBtn, {
      variant: "copper"
    }, "+ Code parrain")
  }, "Parrainage & fid\xE9lit\xE9."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--hairline)',
      marginBottom: 22
    }
  }, [['parrainage', 'Parrainage'], ['niveaux', 'Niveaux de fidélité'], ['points', 'Points suivis']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 13px',
      marginRight: 26,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: tab === id ? 'var(--color-indigo)' : 'var(--ink-soft)',
      borderBottom: '2px solid ' + (tab === id ? 'var(--color-copper)' : 'transparent'),
      marginBottom: -1
    }
  }, l))), tab === 'parrainage' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(ICard, {
    padding: 20,
    topFilet: true,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: kpiLbl
  }, "Parrains actifs"), /*#__PURE__*/React.createElement("div", {
    style: kpiVal
  }, LKI.referrals.length)), /*#__PURE__*/React.createElement(ICard, {
    padding: 20,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: kpiLbl
  }, "Filleuls amen\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: kpiVal
  }, totalFilleuls)), /*#__PURE__*/React.createElement(ICard, {
    padding: 20,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: kpiLbl
  }, "Valid\xE9s"), /*#__PURE__*/React.createElement("div", {
    style: kpiVal
  }, totalValides)), /*#__PURE__*/React.createElement(ICard, {
    surface: "deep",
    padding: 20,
    style: {
      flex: 1.4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "R\xE9compense"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--color-ivoire)',
      marginTop: 6,
      lineHeight: 1.5
    }
  }, "Parrain : ", /*#__PURE__*/React.createElement("strong", null, LKI.referralReward.parrain)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--indigo-100)',
      marginTop: 2,
      lineHeight: 1.5
    }
  }, "Filleul : ", LKI.referralReward.filleul))), /*#__PURE__*/React.createElement(ICard, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1.2fr 0.8fr 0.8fr 1fr 1.4fr',
      padding: '13px 22px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Parrain"), /*#__PURE__*/React.createElement("span", null, "Code"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, "Filleuls"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, "Valid\xE9s"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "Points"), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, "R\xE9compense")), LKI.referrals.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1.2fr 0.8fr 0.8fr 1fr 1.4fr',
      padding: '14px 22px',
      borderTop: '1px solid var(--hairline)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, r.parrain), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace, monospace',
      fontSize: 12,
      color: 'var(--color-copper)'
    }
  }, r.code), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, r.filleuls), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'center'
    }
  }, r.enAttente > 0 ? /*#__PURE__*/React.createElement(IBadge, {
    tone: "copper",
    size: "sm"
  }, r.valides, " \xB7 ", r.enAttente, " en attente") : /*#__PURE__*/React.createElement(IBadge, {
    tone: "indigo",
    size: "sm"
  }, r.valides)), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-copper)'
    }
  }, r.ptsGagnes), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, r.recompense))))), tab === 'niveaux' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(ICard, {
    key: t.key,
    padding: 26,
    style: {
      borderTop: '3px solid ' + t.couleur
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: t.couleur
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 22,
      color: 'var(--color-indigo)'
    }
  }, t.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)',
      marginBottom: 16
    }
  }, "\xC0 partir de ", t.min, " points"), t.avantages.map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 9,
      padding: '7px 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: 'var(--color-copper)',
      transform: 'rotate(45deg)',
      marginTop: 6,
      flex: '0 0 auto'
    }
  }), a))))), tab === 'points' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.3fr',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(ICard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 20,
      color: 'var(--color-indigo)',
      margin: '0 0 14px'
    }
  }, "R\xE8gles de points"), LKI.pointsRules.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '11px 0',
      borderTop: i ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, r.action), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-copper)'
    }
  }, "+", r.pts)))), /*#__PURE__*/React.createElement(ICard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 20,
      color: 'var(--color-indigo)',
      margin: '0 0 14px'
    }
  }, "Mouvements de points \xB7 r\xE9cents"), LKI.pointsLedger.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 0',
      borderTop: i ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, p.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)'
    }
  }, p.motif, " \xB7 ", p.t)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: p.sign > 0 ? '#1F8A5B' : '#B23A48'
    }
  }, p.sign > 0 ? '+' : '', p.pts))))));
}
const kpiLbl = {
  fontFamily: 'var(--font-sans)',
  fontSize: 10,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'var(--ink-soft)'
};
const kpiVal = {
  fontFamily: 'var(--font-serif)',
  fontWeight: 300,
  fontSize: 36,
  color: 'var(--color-indigo)',
  marginTop: 8
};

/* ---------- FORFAITS & ABONNEMENTS ---------- */
function Subscriptions() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LKI.onPacks(force), []);
  const [sell, setSell] = React.useState(false);
  const [create, setCreate] = React.useState(false);
  const plans = LKI.subscriptionPlans;
  const TONE = {
    indigo: 'var(--color-indigo)',
    copper: 'var(--color-copper)',
    obsidian: 'var(--color-obsidian)'
  };
  const mrr = LKI.activeSubs.filter(s => s.statut === 'Actif').length;
  const subPacks = LKI.clientPacks.filter(cp => cp.kind === 'sub');
  return /*#__PURE__*/React.createElement("div", null, sell && /*#__PURE__*/React.createElement(SellModal, {
    kind: "sub",
    items: plans,
    onClose: () => setSell(false)
  }), create && /*#__PURE__*/React.createElement(CreateSubModal, {
    onClose: () => setCreate(false)
  }), /*#__PURE__*/React.createElement(ITitle, {
    k: "R\xE9currence \xB7 revenus pr\xE9visibles",
    right: /*#__PURE__*/React.createElement(IBtn, {
      variant: "copper",
      onClick: () => setCreate(true)
    }, "+ Abonnement")
  }, "Abonnements."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18,
      marginBottom: 26
    }
  }, plans.map(p => /*#__PURE__*/React.createElement(ICard, {
    key: p.id,
    padding: 0,
    style: {
      overflow: 'hidden',
      border: p.populaire ? '2px solid var(--color-copper)' : '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: TONE[p.couleur],
      padding: '22px 24px',
      position: 'relative'
    }
  }, p.populaire && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--color-obsidian)',
      background: 'var(--color-copper)',
      borderRadius: 'var(--radius-pill)',
      padding: '3px 10px'
    }
  }, "Populaire"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, p.cadence), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 26,
      color: 'var(--color-ivoire)',
      marginTop: 6
    }
  }, p.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 34,
      color: 'var(--color-ivoire)'
    }
  }, FI(p.prix)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--color-copper)'
    }
  }, p.economie))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 24px'
    }
  }, p.inclus.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 9,
      padding: '7px 0',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-copper)',
      flex: '0 0 auto'
    }
  }, "\u2713"), it)), p.lignes && p.lignes.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      paddingTop: 10,
      borderTop: '1px dashed var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 6
    }
  }, "D\xE9compt\xE9 / cycle"), p.lignes.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l.kind === 'prod' ? '▣ ' : '✂ ', l.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      color: 'var(--color-indigo)'
    }
  }, "\xD7", l.qte)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(IBtn, {
    fullWidth: true,
    variant: p.populaire ? 'primary' : 'secondary',
    onClick: () => setSell(true)
  }, "Vendre \xE0 une cliente")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 21,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "Abonnements actifs"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, mrr, " actifs \xB7 revenu r\xE9current")), /*#__PURE__*/React.createElement(ICard, {
    padding: 0,
    style: {
      overflow: 'hidden',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1.4fr 1fr 1fr 1fr',
      padding: '13px 22px',
      background: 'var(--color-sable)',
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Cliente"), /*#__PURE__*/React.createElement("span", null, "Abonnement"), /*#__PURE__*/React.createElement("span", null, "Depuis"), /*#__PURE__*/React.createElement("span", null, "Prochaine"), /*#__PURE__*/React.createElement("span", null, "Statut")), LKI.activeSubs.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1.4fr 1fr 1fr 1fr',
      padding: '14px 22px',
      borderTop: '1px solid var(--hairline)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, s.client), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, s.plan), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, s.depuis), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, s.prochaine), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(IBadge, {
    tone: s.statut === 'Actif' ? 'solid' : 'copper',
    size: "sm"
  }, s.statut))))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 21,
      color: 'var(--color-indigo)',
      margin: '0 0 12px'
    }
  }, "Suivi d'utilisation \xB7 ce cycle"), subPacks.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13.5,
      color: 'var(--ink-soft)',
      fontStyle: 'italic'
    }
  }, "Vendez un abonnement \xE0 une cliente : sa consommation s'affichera ici et diminuera automatiquement \xE0 chaque rendez-vous."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 16
    }
  }, subPacks.map(cp => {
    const totLeft = cp.lignes.reduce((s, l) => s + (l.total - l.used), 0);
    return /*#__PURE__*/React.createElement(ICard, {
      key: cp.id,
      padding: 22
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 20,
        color: 'var(--color-indigo)'
      }
    }, cp.client), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)'
      }
    }, cp.pack, " \xB7 depuis ", cp.achat)), /*#__PURE__*/React.createElement(IBadge, {
      tone: totLeft === 0 ? 'outline' : 'copper',
      size: "sm"
    }, totLeft === 0 ? 'Cycle épuisé' : totLeft + ' restant' + (totLeft > 1 ? 's' : ''))), cp.lignes.map((l, i) => {
      const left = l.total - l.used,
        pct = l.used / l.total * 100;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          marginBottom: 10
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 5
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: 'var(--ink)'
        }
      }, l.svc), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 12.5,
          color: left === 0 ? 'var(--ink-soft)' : 'var(--color-copper)'
        }
      }, /*#__PURE__*/React.createElement("strong", {
        style: {
          fontFamily: 'var(--font-serif)',
          fontSize: 17,
          color: left === 0 ? 'var(--ink-soft)' : 'var(--color-indigo)'
        }
      }, left), " / ", l.total)), /*#__PURE__*/React.createElement("div", {
        style: {
          height: 6,
          background: 'var(--hairline)',
          borderRadius: 3,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: pct + '%',
          height: '100%',
          background: 'var(--color-copper)'
        }
      })));
    }), (cp.history || []).length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        paddingTop: 10,
        borderTop: '1px solid var(--hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 9.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--ink-soft)',
        marginBottom: 6
      }
    }, "RDV d\xE9compt\xE9s (", cp.history.length, ")"), cp.history.slice(0, 3).map((h, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '3px 0',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink)'
      }
    }, h.svc), /*#__PURE__*/React.createElement("span", null, h.date, " \xB7 ", h.rdv)))));
  })));
}

/* Créer un abonnement : tous services + produits avec quantités */
function CreateSubModal({
  onClose
}) {
  const [nom, setNom] = React.useState('');
  const [cadence, setCadence] = React.useState('Mensuel');
  const [remise, setRemise] = React.useState('10');
  const [qty, setQty] = React.useState({});
  const [done, setDone] = React.useState(false);
  const setQ = (key, v) => setQty(q => ({
    ...q,
    [key]: Math.max(0, v)
  }));
  const services = LKI.services,
    products = LKI.products;
  const lignes = () => {
    const out = [];
    services.forEach(s => {
      const n = qty['s:' + s.id] || 0;
      if (n > 0) out.push({
        kind: 'svc',
        nom: s.nom,
        qte: n,
        prix: s.prix
      });
    });
    products.forEach(p => {
      const n = qty['p:' + p.id] || 0;
      if (n > 0) out.push({
        kind: 'prod',
        nom: p.nom,
        qte: n,
        prix: p.prix
      });
    });
    return out;
  };
  const ls = lignes();
  // Live pricing: valeur réelle des éléments, remise %, prix final automatique
  const valeur = ls.reduce((s, l) => s + l.prix * l.qte, 0);
  const pctRemise = Math.min(100, Math.max(0, parseInt(remise) || 0));
  const prixFinal = Math.round(valeur * (1 - pctRemise / 100));
  const economie = valeur - prixFinal;
  const create = () => {
    LKI.addSubPlan({
      nom: nom || 'Nouvel abonnement',
      cadence,
      prix: prixFinal,
      valeur,
      remise: pctRemise,
      populaire: false,
      economie: pctRemise > 0 ? `−${pctRemise}%` : null,
      inclus: ls.map(l => `${l.qte} × ${l.nom}`),
      lignes: ls.map(l => ({
        kind: l.kind,
        nom: l.nom,
        qte: l.qte
      })),
      couleur: 'indigo'
    });
    setDone(true);
  };
  const Stepper = ({
    k
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQ(k, (qty[k] || 0) - 1),
    style: stepBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      textAlign: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: (qty[k] || 0) > 0 ? 'var(--color-indigo)' : 'var(--ink-soft)'
    }
  }, qty[k] || 0), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQ(k, (qty[k] || 0) + 1),
    style: stepBtn
  }, "+"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(20,20,27,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--color-ivoire)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      width: 'min(620px,96vw)',
      maxHeight: '88vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      color: 'var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 14px',
      fontSize: 24
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)'
    }
  }, "Abonnement cr\xE9\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 6
    }
  }, "Il appara\xEEt dans le catalogue \u2014 vendez-le \xE0 une cliente."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(IBtn, {
    variant: "copper",
    onClick: onClose
  }, "Fermer"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px 16px',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 25,
      color: 'var(--color-indigo)'
    }
  }, "Cr\xE9er un abonnement"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: nom,
    onChange: e => setNom(e.target.value),
    placeholder: "Nom de l'abonnement",
    style: inp
  }), /*#__PURE__*/React.createElement("select", {
    value: cadence,
    onChange: e => setCadence(e.target.value),
    style: inp
  }, /*#__PURE__*/React.createElement("option", null, "Mensuel"), /*#__PURE__*/React.createElement("option", null, "Trimestriel"), /*#__PURE__*/React.createElement("option", null, "Annuel")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: remise,
    onChange: e => setRemise(e.target.value),
    type: "number",
    placeholder: "Remise",
    style: {
      ...inp,
      paddingRight: 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-copper)'
    }
  }, "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)',
      marginTop: 8
    }
  }, "Onglet remise : le prix de l'abonnement se calcule automatiquement \xE0 partir de la valeur des \xE9l\xE9ments inclus.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 28px',
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      margin: '0 0 8px'
    }
  }, "Services inclus \xB7 quantit\xE9 / cycle"), services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '7px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, "\u2702 ", s.nom, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)'
    }
  }, "\xB7 ", FI(s.prix))), /*#__PURE__*/React.createElement(Stepper, {
    k: 's:' + s.id
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      margin: '16px 0 8px'
    }
  }, "Produits inclus \xB7 quantit\xE9 / cycle"), products.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '7px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, "\u25A3 ", p.nom, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-soft)'
    }
  }, "\xB7 ", FI(p.prix))), /*#__PURE__*/React.createElement(Stepper, {
    k: 'p:' + p.id
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 28px',
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, "Valeur r\xE9elle"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)',
      textDecoration: 'line-through'
    }
  }, FI(valeur))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--color-copper)'
    }
  }, "Remise ", pctRemise, "% \xB7 \xE9conomie"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--color-copper)'
    }
  }, "\u2212", FI(economie))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 12,
      paddingTop: 8,
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)'
    }
  }, "Prix de l'abonnement"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 26,
      color: 'var(--color-indigo)'
    }
  }, FI(prixFinal), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, "/ ", cadence.toLowerCase()))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, ls.length, " \xE9l\xE9ment", ls.length > 1 ? 's' : '', " inclus"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IBtn, {
    variant: "ghost",
    onClick: onClose
  }, "Annuler"), /*#__PURE__*/React.createElement(IBtn, {
    variant: "copper",
    disabled: ls.length === 0,
    onClick: create
  }, "Cr\xE9er l'abonnement")))))));
}
const inp = {
  padding: '9px 12px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--hairline)',
  background: 'var(--color-ivoire)',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  color: 'var(--color-indigo)'
};
const stepBtn = {
  width: 28,
  height: 30,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: 16,
  color: 'var(--color-copper)'
};
Object.assign(window, {
  LK_Referral: Referral,
  LK_Subscriptions: Subscriptions
});

/* ---------- PACKS · carnets de services prépayés ---------- */
function SellModal({
  kind,
  items,
  onClose
}) {
  const [client, setClient] = React.useState(LKI.clients[0].nom);
  const [itemId, setItemId] = React.useState(items[0].id);
  const [done, setDone] = React.useState(false);
  const sell = () => {
    if (kind === 'pack') LKI.assignPack(client, itemId);else LKI.assignSub(client, itemId);
    setDone(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(20,20,27,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--color-ivoire)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      width: 'min(440px,94vw)',
      padding: 28
    }
  }, done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      color: 'var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 14px',
      fontSize: 24
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 23,
      color: 'var(--color-indigo)'
    }
  }, kind === 'pack' ? 'Carnet' : 'Abonnement', " assign\xE9 \xE0 ", client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)',
      marginTop: 6
    }
  }, "Visible aussit\xF4t dans son profil et \xE0 la prise de RDV."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(IBtn, {
    variant: "copper",
    onClick: onClose
  }, "Fermer"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)',
      marginBottom: 16
    }
  }, "Vendre \xE0 une cliente"), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Cliente"), /*#__PURE__*/React.createElement("select", {
    value: client,
    onChange: e => setClient(e.target.value),
    style: selStyle
  }, LKI.clients.map(c => /*#__PURE__*/React.createElement("option", {
    key: c.id,
    value: c.nom
  }, c.nom, " \xB7 ", c.loc_type))), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginTop: 14,
      display: 'block'
    }
  }, kind === 'pack' ? 'Carnet' : 'Abonnement'), /*#__PURE__*/React.createElement("select", {
    value: itemId,
    onChange: e => setItemId(e.target.value),
    style: selStyle
  }, items.map(p => /*#__PURE__*/React.createElement("option", {
    key: p.id,
    value: p.id
  }, p.nom, " \xB7 ", FI(p.prix)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(IBtn, {
    fullWidth: true,
    variant: "copper",
    onClick: sell
  }, "Confirmer la vente"), /*#__PURE__*/React.createElement(IBtn, {
    fullWidth: true,
    variant: "ghost",
    onClick: onClose
  }, "Annuler")))));
}
const selStyle = {
  width: '100%',
  marginTop: 6,
  padding: '10px 12px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--hairline)',
  background: 'var(--color-ivoire)',
  fontFamily: 'var(--font-sans)',
  fontSize: 14,
  color: 'var(--color-indigo)'
};
function Packs() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LKI.onPacks(force), []);
  const [sell, setSell] = React.useState(null);
  const TONE = {
    indigo: 'var(--color-indigo)',
    copper: 'var(--color-copper)',
    obsidian: 'var(--color-obsidian)'
  };
  const packs = LKI.servicePacks;
  const held = LKI.clientPacks;
  return /*#__PURE__*/React.createElement("div", null, sell && /*#__PURE__*/React.createElement(SellModal, {
    kind: "pack",
    items: packs,
    onClose: () => setSell(null)
  }), /*#__PURE__*/React.createElement(ITitle, {
    k: "Carnets pr\xE9pay\xE9s \xB7 d\xE9compt\xE9s automatiquement \xE0 chaque RDV",
    right: /*#__PURE__*/React.createElement(IBtn, {
      variant: "copper"
    }, "+ Carnet")
  }, "Packs de services."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--ink-soft)',
      maxWidth: 660,
      margin: '0 0 22px'
    }
  }, "Un pack = un lot de services pr\xE9pay\xE9s (ex. 12 shampoings + 6 soins). Quand la cliente prend un RDV pour un service couvert, LOKAA ", /*#__PURE__*/React.createElement("strong", null, "d\xE9compte automatiquement"), " une unit\xE9 \u2014 aucune action manuelle."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18,
      marginBottom: 28
    }
  }, packs.map(p => /*#__PURE__*/React.createElement(ICard, {
    key: p.id,
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: TONE[p.couleur],
      padding: '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Carnet pr\xE9pay\xE9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 24,
      color: 'var(--color-ivoire)',
      marginTop: 6
    }
  }, p.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 30,
      color: 'var(--color-ivoire)'
    }
  }, FI(p.prix)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--color-copper)'
    }
  }, p.economie))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px'
    }
  }, p.lignes.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l.svc), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      color: 'var(--color-indigo)'
    }
  }, "\xD7", l.total))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IBtn, {
    fullWidth: true,
    variant: "secondary",
    onClick: () => setSell(p.id)
  }, "Vendre \xE0 une cliente")))))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 21,
      color: 'var(--color-indigo)',
      margin: '0 0 12px'
    }
  }, "Carnets en cours \xB7 restant par cliente"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 16
    }
  }, held.map(cp => {
    const totLeft = cp.lignes.reduce((s, l) => s + (l.total - l.used), 0);
    return /*#__PURE__*/React.createElement(ICard, {
      key: cp.id,
      padding: 22
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 20,
        color: 'var(--color-indigo)'
      }
    }, cp.client), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)'
      }
    }, cp.pack, " \xB7 achet\xE9 ", cp.achat)), /*#__PURE__*/React.createElement(IBadge, {
      tone: totLeft === 0 ? 'outline' : 'copper',
      size: "sm"
    }, totLeft === 0 ? 'Épuisé' : totLeft + ' restant' + (totLeft > 1 ? 's' : ''))), cp.lignes.map((l, i) => {
      const left = l.total - l.used,
        pct = l.used / l.total * 100;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          marginBottom: 12
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 5
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: 'var(--ink)'
        }
      }, l.svc), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontSize: 12.5,
          color: left === 0 ? 'var(--ink-soft)' : 'var(--color-copper)'
        }
      }, /*#__PURE__*/React.createElement("strong", {
        style: {
          fontFamily: 'var(--font-serif)',
          fontSize: 17,
          color: left === 0 ? 'var(--ink-soft)' : 'var(--color-indigo)'
        }
      }, left), " / ", l.total, " restant", left > 1 ? 's' : '')), /*#__PURE__*/React.createElement("div", {
        style: {
          height: 6,
          background: 'var(--hairline)',
          borderRadius: 3,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: pct + '%',
          height: '100%',
          background: 'var(--color-copper)'
        }
      })));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        paddingTop: 12,
        borderTop: '1px solid var(--hairline)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 9.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--ink-soft)',
        marginBottom: 8
      }
    }, "Rendez-vous d\xE9compt\xE9s (", (cp.history || []).length, ")"), (cp.history || []).slice(0, 4).map((h, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4px 0',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink)'
      }
    }, h.svc), /*#__PURE__*/React.createElement("span", null, h.date, " \xB7 ", h.rdv))), (cp.history || []).length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--ink-soft)',
        fontStyle: 'italic'
      }
    }, "Aucun d\xE9compte encore.")));
  })));
}
Object.assign(window, {
  LK_Packs: Packs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensI.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensJ.jsx
try { (() => {
/* LOKAA Phase 1 — Screens J: Vitrine client (merchandising back-office → front-office) */
const {
  Button: JBtn,
  Badge: JBadge,
  Card: JCard,
  Filet: JFilet,
  Eyebrow: JEye
} = window.MNDDesignSystem_a962de;
const LKJ = window.LOKAA;
const FJ = LKJ.FCFA;
function JTitle({
  k,
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(JEye, null, k), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, children)), right);
}
function Storefront() {
  const [sf, setSf] = React.useState(LKJ.getStorefront());
  const [tab, setTab] = React.useState('client');
  const [previewLock, setPreviewLock] = React.useState('Microlocks');
  const [clientId, setClientId] = React.useState(LKJ.clients[0].id);
  const [editSvc, setEditSvc] = React.useState(null);
  const [, force] = React.useReducer(x => x + 1, 0);
  const [saved, setSaved] = React.useState(false);
  React.useEffect(() => LKJ.onStorefront(s => setSf({
    ...s
  })), []);
  React.useEffect(() => LKJ.onServiceEdit(() => force()), []);
  const client = LKJ.clientById(clientId);
  const clientLock = LKJ.clientLockModel(client);
  const activeLock = tab === 'client' ? clientLock : previewLock;
  const allServices = LKJ.services;
  const lockTypes = Object.keys(LKJ.lockTargeting);
  const apply = patch => {
    LKJ.setStorefront(patch);
    setSaved(true);
    setTimeout(() => setSaved(false), 1600);
  };
  const toggleFeatured = id => {
    const f = sf.featured.includes(id) ? sf.featured.filter(x => x !== id) : [...sf.featured, id];
    apply({
      featured: f
    });
  };
  const toggleTarget = (lock, id) => {
    const cur = sf.targeting[lock] || [];
    const next = cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id];
    apply({
      targeting: {
        ...sf.targeting,
        [lock]: next
      }
    });
  };
  const toggleSub = id => {
    const s = sf.subsOffered.includes(id) ? sf.subsOffered.filter(x => x !== id) : [...sf.subsOffered, id];
    apply({
      subsOffered: s
    });
  };
  const toggleUpsell = id => apply({
    upsells: sf.upsells.map(u => u.id === id ? {
      ...u,
      on: !u.on
    } : u)
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(JTitle, {
    k: "Vitrine client \xB7 back-office \u2192 front-office",
    right: saved ? /*#__PURE__*/React.createElement(JBadge, {
      tone: "solid",
      size: "sm"
    }, "\u2713 Publi\xE9 sur le front") : /*#__PURE__*/React.createElement(JBadge, {
      tone: "copper",
      size: "sm"
    }, "Synchro live")
  }, "Vitrine client."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--ink-soft)',
      margin: '-8px 0 22px',
      maxWidth: 680
    }
  }, "S\xE9lectionnez une cliente pour voir exactement sa plateforme selon son mod\xE8le de lock. Cliquez un service dans l'aper\xE7u pour le modifier \u2014 tout se refl\xE8te en direct."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 26,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--hairline)',
      marginBottom: 20,
      flexWrap: 'wrap'
    }
  }, [['client', 'Vue cliente'], ['featured', 'Services à la une'], ['targeting', 'Ciblage par lock'], ['upsells', 'Upsells'], ['subs', 'Abonnements']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 12px',
      marginRight: 20,
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 500,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: tab === id ? 'var(--color-indigo)' : 'var(--ink-soft)',
      borderBottom: '2px solid ' + (tab === id ? 'var(--color-copper)' : 'transparent'),
      marginBottom: -1
    }
  }, l))), tab === 'client' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: hint
  }, "Choisissez une cliente : l'aper\xE7u affiche sa plateforme r\xE9elle, cibl\xE9e selon son mod\xE8le de lock."), LKJ.clients.map(c => {
    const on = c.id === clientId;
    const lk = LKJ.clientLockModel(c);
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => setClientId(c.id),
      style: {
        ...rowBtn(on),
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        backgroundImage: `url(../../assets/photos/${c.photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flex: '0 0 auto',
        border: on ? '2px solid var(--color-copper)' : '1px solid var(--hairline)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: rowName
    }, c.nom), /*#__PURE__*/React.createElement("span", {
      style: rowSub
    }, c.loc_type, " \xB7 ", c.ville)), /*#__PURE__*/React.createElement(JBadge, {
      tone: on ? 'copper' : 'indigo',
      size: "sm"
    }, lk));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: '14px 16px',
      background: 'var(--color-sable)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 300,
      color: 'var(--ink)',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-indigo)'
    }
  }, client.nom), " est en ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--color-copper)'
    }
  }, clientLock), " \u2192 elle voit les services cibl\xE9s pour ce mod\xE8le, plus les services \xE0 la une, ses forfaits et les upsells actifs.")), tab === 'featured' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: hint
  }, "Cochez les services mis \xAB \xE0 la une \xBB sur le front. Ordre = ordre d'ajout."), allServices.map(s => {
    const on = sf.featured.includes(s.id);
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => toggleFeatured(s.id),
      style: rowBtn(on)
    }, /*#__PURE__*/React.createElement(Check, {
      on: on
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: rowName
    }, s.nom), /*#__PURE__*/React.createElement("span", {
      style: rowSub
    }, s.cat, " \xB7 ", FJ(s.prix))), on && /*#__PURE__*/React.createElement(JBadge, {
      tone: "copper",
      size: "sm"
    }, "\xE0 la une"));
  })), tab === 'targeting' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: hint
  }, "Pour chaque type de lock, choisissez les services propos\xE9s \xE0 ces clientes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, lockTypes.map(lt => /*#__PURE__*/React.createElement("button", {
    key: lt,
    onClick: () => setPreviewLock(lt),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      padding: '7px 13px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      border: '1px solid ' + (previewLock === lt ? 'var(--color-copper)' : 'var(--hairline)'),
      background: previewLock === lt ? 'var(--color-indigo)' : 'transparent',
      color: previewLock === lt ? 'var(--color-ivoire)' : 'var(--ink-soft)'
    }
  }, lt))), allServices.map(s => {
    const on = (sf.targeting[previewLock] || []).includes(s.id);
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => toggleTarget(previewLock, s.id),
      style: rowBtn(on)
    }, /*#__PURE__*/React.createElement(Check, {
      on: on
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: rowName
    }, s.nom), /*#__PURE__*/React.createElement("span", {
      style: rowSub
    }, s.cat, " \xB7 ", FJ(s.prix))));
  })), tab === 'upsells' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: hint
  }, "Services additionnels propos\xE9s ", /*#__PURE__*/React.createElement("strong", null, "pendant"), " ou ", /*#__PURE__*/React.createElement("strong", null, "apr\xE8s"), " la r\xE9servation."), sf.upsells.map(u => /*#__PURE__*/React.createElement("div", {
    key: u.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      padding: '13px 16px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + (u.on ? 'var(--color-copper)' : 'var(--hairline)'),
      background: u.on ? 'var(--color-ivoire)' : 'transparent',
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: rowName
  }, u.nom), /*#__PURE__*/React.createElement(JBadge, {
    tone: u.moment === 'pendant' ? 'indigo' : 'copper',
    size: "sm"
  }, u.moment === 'pendant' ? 'Pendant RDV' : 'Après RDV')), /*#__PURE__*/React.createElement("span", {
    style: rowSub
  }, u.desc, " \xB7 ", FJ(u.prix))), /*#__PURE__*/React.createElement(Toggle2, {
    on: u.on,
    onClick: () => toggleUpsell(u.id)
  }))), /*#__PURE__*/React.createElement(JBtn, {
    size: "sm",
    variant: "ghost",
    style: {
      marginTop: 6
    }
  }, "+ Nouvel upsell")), tab === 'subs' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: hint
  }, "Choisissez les forfaits affich\xE9s sur la plateforme cliente."), LKJ.subscriptionPlans.map(p => {
    const on = sf.subsOffered.includes(p.id);
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: () => toggleSub(p.id),
      style: rowBtn(on)
    }, /*#__PURE__*/React.createElement(Check, {
      on: on
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: rowName
    }, p.nom), /*#__PURE__*/React.createElement("span", {
      style: rowSub
    }, p.cadence, " \xB7 ", FJ(p.prix), " \xB7 ", p.economie)), p.populaire && /*#__PURE__*/React.createElement(JBadge, {
      tone: "copper",
      size: "sm"
    }, "populaire"));
  }))), /*#__PURE__*/React.createElement(FrontPreview, {
    lock: activeLock,
    client: tab === 'client' ? client : null,
    onPickService: s => setEditSvc(s)
  })), editSvc && /*#__PURE__*/React.createElement(ServiceEditor, {
    svc: editSvc,
    onClose: () => setEditSvc(null)
  }));
}

/* ---- Service editor (modifier un service depuis le front) ---- */
function ServiceEditor({
  svc,
  onClose
}) {
  const [form, setForm] = React.useState({
    nom: svc.nom,
    prix: svc.prix,
    duree: svc.duree,
    desc: svc.desc || ''
  });
  const save = () => {
    LKJ.saveService(svc.id, {
      nom: form.nom,
      prix: parseInt(form.prix, 10) || 0,
      duree: form.duree,
      desc: form.desc
    });
    onClose();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 900,
      background: 'rgba(12,13,32,0.45)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(440px, 94vw)',
      zIndex: 1000,
      background: 'var(--color-ivoire)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-indigo)',
      padding: '22px 26px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Modifier le service"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-ivoire)',
      marginTop: 4
    }
  }, svc.cat)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--indigo-100)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 26px',
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lblJ
  }, "Nom du service"), /*#__PURE__*/React.createElement("input", {
    value: form.nom,
    onChange: e => setForm({
      ...form,
      nom: e.target.value
    }),
    style: inJ
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lblJ
  }, "Prix (F)"), /*#__PURE__*/React.createElement("input", {
    value: form.prix,
    onChange: e => setForm({
      ...form,
      prix: e.target.value.replace(/\D/g, '')
    }),
    style: inJ
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lblJ
  }, "Dur\xE9e"), /*#__PURE__*/React.createElement("input", {
    value: form.duree,
    onChange: e => setForm({
      ...form,
      duree: e.target.value
    }),
    style: inJ
  }))), /*#__PURE__*/React.createElement("div", {
    style: lblJ
  }, "Description (visible sur le front)"), /*#__PURE__*/React.createElement("textarea", {
    value: form.desc,
    onChange: e => setForm({
      ...form,
      desc: e.target.value
    }),
    rows: 4,
    style: {
      width: '100%',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      background: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--ink)',
      padding: '10px 12px',
      resize: 'vertical',
      outline: 'none',
      lineHeight: 1.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: '14px 16px',
      background: 'var(--color-sable)',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      lineHeight: 1.5
    }
  }, "La modification s'applique partout : front client, catalogue, r\xE9servation et POS.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 26px',
      borderTop: '1px solid var(--hairline)',
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(JBtn, {
    variant: "copper",
    onClick: save
  }, "Enregistrer"), /*#__PURE__*/React.createElement(JBtn, {
    variant: "ghost",
    onClick: onClose
  }, "Annuler"))));
}
const lblJ = {
  fontFamily: 'var(--font-sans)',
  fontSize: 9.5,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--ink-soft)',
  margin: '0 0 6px'
};
const inJ = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid var(--color-copper)',
  background: 'transparent',
  fontFamily: 'var(--font-serif)',
  fontSize: 18,
  color: 'var(--color-indigo)',
  padding: '4px 0',
  marginBottom: 18,
  outline: 'none'
};
function FrontPreview({
  lock,
  client,
  onPickService
}) {
  const view = LKJ.clientStorefront(lock);
  const B = LKJ.getBrand();
  const tap = s => ({
    cursor: 'pointer'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 10
    }
  }, client ? `Plateforme de ${client.nom}` : 'Aperçu plateforme cliente'), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 28,
      overflow: 'hidden',
      border: '8px solid #14141B',
      background: '#14141B',
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: B.colors.ivoire,
      maxHeight: 580,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: B.colors.indigo,
      padding: '18px 18px',
      textAlign: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: B.logo === 'app-icon.png' ? '../../assets/logos/app-icon.png' : `../../assets/monograms/${B.mono}`,
    alt: "",
    style: {
      width: 26,
      borderRadius: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      letterSpacing: '0.14em',
      color: B.colors.ivoire,
      marginTop: 5
    }
  }, B.name), client ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${client.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1.5px solid ' + B.colors.copper
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: B.colors.ivoire
    }
  }, "Bonjour ", client.nom.split(' ')[0], " \uD83D\uDC51"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      color: B.colors.copper
    }
  }, lock, " \xB7 depuis ", client.depuis))) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      color: B.colors.copper,
      letterSpacing: '0.1em',
      marginTop: 2
    }
  }, "Profil : ", lock)), view.featured.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 14px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: frontHd(B)
  }, "\xC0 la une pour vous"), view.featured.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    onClick: () => onPickService(s),
    style: {
      background: B.colors.indigo,
      borderRadius: 8,
      padding: '12px 14px',
      marginBottom: 8,
      cursor: 'pointer',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: B.colors.ivoire
    }
  }, s.nom), s.desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      fontWeight: 300,
      color: 'rgba(255,255,255,0.65)',
      marginTop: 3,
      lineHeight: 1.4
    }
  }, s.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'rgba(255,255,255,0.7)'
    }
  }, s.duree), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: B.colors.copper
    }
  }, FJ(s.prix))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 10,
      right: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 8.5,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "modifier")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: frontHd(B)
  }, "Recommand\xE9 pour vos ", lock.toLowerCase()), view.services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    onClick: () => onPickService(s),
    style: {
      padding: '10px 0',
      borderBottom: '1px solid var(--hairline)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--color-indigo)'
    }
  }, s.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: B.colors.copper
    }
  }, FJ(s.prix))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      color: 'var(--ink-soft)',
      marginTop: 1
    }
  }, s.desc || s.cat, " \xB7 ", s.duree)))), view.subs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: frontHd(B)
  }, "Forfaits"), view.subs.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      border: '1px solid ' + B.colors.copper,
      borderRadius: 8,
      padding: '10px 12px',
      marginBottom: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: 'var(--color-indigo)'
    }
  }, p.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      color: 'var(--ink-soft)'
    }
  }, p.cadence, " \xB7 ", p.economie)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: B.colors.copper
    }
  }, FJ(p.prix))))), view.upsells.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: frontHd(B)
  }, "Ajouter \xE0 votre rendez-vous"), view.upsells.map(u => /*#__PURE__*/React.createElement("div", {
    key: u.id,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--color-sable)',
      borderRadius: 8,
      padding: '10px 12px',
      marginBottom: 7
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      color: 'var(--color-indigo)'
    }
  }, "+ ", u.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      color: 'var(--ink-soft)'
    }
  }, u.moment === 'pendant' ? 'Pendant le RDV' : 'À la fin')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 13,
      color: B.colors.copper
    }
  }, FJ(u.prix))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      marginTop: 12,
      textAlign: 'center',
      lineHeight: 1.5
    }
  }, "Touchez un service dans l'aper\xE7u pour le modifier \u2014 la mise \xE0 jour est instantan\xE9e."));
}
const hint = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: 12.5,
  color: 'var(--ink-soft)',
  marginBottom: 14,
  lineHeight: 1.5
};
const rowName = {
  display: 'block',
  fontFamily: 'var(--font-serif)',
  fontSize: 16,
  color: 'var(--color-indigo)'
};
const rowSub = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 11.5,
  color: 'var(--ink-soft)',
  marginTop: 1
};
const rowBtn = on => ({
  display: 'flex',
  alignItems: 'center',
  gap: 13,
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
  padding: '12px 16px',
  borderRadius: 'var(--radius-md)',
  marginBottom: 8,
  border: '1px solid ' + (on ? 'var(--color-copper)' : 'var(--hairline)'),
  background: on ? 'var(--color-ivoire)' : 'transparent'
});
const frontHd = B => ({
  fontFamily: 'var(--font-sans)',
  fontSize: 9,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: B.colors.copper,
  marginBottom: 8
});
function Check({
  on
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 5,
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      color: '#fff',
      background: on ? 'var(--color-copper)' : 'transparent',
      border: '1.5px solid ' + (on ? 'var(--color-copper)' : 'var(--obsidian-200)')
    }
  }, on ? '✓' : '');
}
function Toggle2({
  on,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: 42,
      height: 24,
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      background: on ? 'var(--color-copper)' : 'var(--obsidian-200)',
      position: 'relative',
      transition: 'background 200ms',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 200ms'
    }
  }));
}
Object.assign(window, {
  LK_Storefront: Storefront
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensJ.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensK.jsx
try { (() => {
/* LOKAA Phase 1 — Screens K: Booking modal (shared by Agenda + Rendez-vous) */
const {
  Button: KBtn,
  Badge: KBadge,
  Card: KCard
} = window.MNDDesignSystem_a962de;
const LKK = window.LOKAA;
const FK = LKK.FCFA;

/* Réutilisable : créer / modifier un rendez-vous, avec aperçu front client. */
function BookingModal({
  initial,
  onClose
}) {
  const [step, setStep] = React.useState(1);
  const [clientId, setClientId] = React.useState(initial.clientId || LKK.clients[0].id);
  const [clientQuery, setClientQuery] = React.useState('');
  const [picks, setPicks] = React.useState([initial.svcId || LKK.services[0].id]);
  const svcId = picks[0];
  const togglePick = id => setPicks(p => p.includes(id) ? p.length > 1 ? p.filter(x => x !== id) : p : [...p, id]);
  const [day, setDay] = React.useState(initial.day || 'Jeu 26 juin');
  const [time, setTime] = React.useState(initial.time || '09:00');
  const [stylist, setStylist] = React.useState(initial.stylist || 'Yéman');
  const [done, setDone] = React.useState(false);
  const editing = !!initial.editing;
  const isPast = !!initial.past;
  const [pastDate, setPastDate] = React.useState('');
  const [markPaid, setMarkPaid] = React.useState(isPast);
  const [styleLink, setStyleLink] = React.useState('');
  const [styleImg, setStyleImg] = React.useState(null);
  const styleRef = React.useRef(null);
  const client = LKK.clientById(clientId);
  const svc = LKK.svcById(svcId);
  const nbSessions = svc ? svc.sessions || 1 : 1;
  const isMulti = nbSessions > 1;
  // predefined session schedule — spaced one week apart by default
  const PRESET_DATES = ['Jeu 26 juin', 'Jeu 3 juil', 'Jeu 10 juil', 'Jeu 17 juil', 'Jeu 24 juil', 'Jeu 31 juil'];
  const [sessions, setSessions] = React.useState([]);
  React.useEffect(() => {
    if (isMulti) {
      setSessions(Array.from({
        length: nbSessions
      }, (_, i) => ({
        date: PRESET_DATES[i] || PRESET_DATES[PRESET_DATES.length - 1],
        time: ['09:00', '09:00', '10:30', '10:30', '13:00', '13:00'][i] || '09:00',
        stylist: stylist
      })));
    }
  }, [svcId]);
  const setSession = (i, patch) => setSessions(ss => ss.map((s, k) => k === i ? {
    ...s,
    ...patch
  } : s));
  const auto = LKK.autoDiscountFor(client ? client.nom : '');
  const picked = picks.map(id => LKK.svcById(id)).filter(Boolean);
  const multiSvc = picked.length > 1;
  const gross = picked.reduce((s, x) => s + x.prix, 0);
  const net = Math.round(gross * (auto ? 1 - auto.pct : 1));
  const svcLabel = picked.map(s => s.nom).join(' + ');
  const times = ['09:00', '10:30', '13:00', '15:30', '17:00'];
  const B = LKK.getBrand();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 900,
      background: 'rgba(12,13,32,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      zIndex: 1000,
      width: 'min(860px, 96vw)',
      maxHeight: '92vh',
      overflow: 'hidden',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--color-ivoire)',
      boxShadow: 'var(--shadow-xl)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px',
      overflowY: 'auto',
      maxHeight: '92vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, editing ? 'Modifier le rendez-vous' : isPast ? 'Enregistrer un RDV passé' : 'Nouveau rendez-vous'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 28,
      color: 'var(--color-indigo)',
      marginTop: 2
    }
  }, done ? 'Confirmé' : `Étape ${step} / 3`)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--ink-soft)'
    }
  }, "\u2715")), done ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      color: 'var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      fontSize: 26
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      color: 'var(--color-indigo)'
    }
  }, editing ? 'Rendez-vous mis à jour' : 'Rendez-vous créé'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13.5,
      color: 'var(--ink-soft)',
      margin: '8px auto 0',
      maxWidth: 320,
      lineHeight: 1.55
    }
  }, client.nom, " \xB7 ", svc.nom, /*#__PURE__*/React.createElement("br", null), isMulti ? `${nbSessions} sessions planifiées : ${sessions.map(s => s.date).join(' · ')}` : `${day} à ${time} · ${stylist}`, /*#__PURE__*/React.createElement("br", null), "Rappel WhatsApp programm\xE9 (T-48h, T-2h)."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(KBtn, {
    variant: "copper",
    onClick: onClose
  }, "Fermer"))) : /*#__PURE__*/React.createElement(React.Fragment, null, step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lblK
  }, "Cliente"), /*#__PURE__*/React.createElement("input", {
    value: clientQuery,
    onChange: e => setClientQuery(e.target.value),
    placeholder: "Rechercher un client par nom\u2026",
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '11px 14px',
      marginBottom: 10,
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--hairline)',
      background: 'var(--color-ivoire)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--color-indigo)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      marginBottom: 8,
      maxHeight: 260,
      overflowY: 'auto'
    }
  }, LKK.clients.filter(c => !clientQuery.trim() || (c.nom + ' ' + (c.loc_type || '') + ' ' + (c.ville || '')).toLowerCase().includes(clientQuery.trim().toLowerCase())).map(c => /*#__PURE__*/React.createElement("button", {
    key: c.id,
    onClick: () => setClientId(c.id),
    style: pickRow(c.id === clientId)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${c.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: pickName
  }, c.nom), /*#__PURE__*/React.createElement("span", {
    style: pickSub
  }, c.loc_type, " \xB7 ", c.tier)), LKK.autoDiscountFor(c.nom) && /*#__PURE__*/React.createElement(KBadge, {
    tone: "copper",
    size: "sm"
  }, "\u2212", Math.round(LKK.autoDiscountFor(c.nom).pct * 100), "%"))), LKK.clients.filter(c => !clientQuery.trim() || (c.nom + ' ' + (c.loc_type || '') + ' ' + (c.ville || '')).toLowerCase().includes(clientQuery.trim().toLowerCase())).length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontStyle: 'italic',
      color: 'var(--ink-soft)',
      padding: '14px 4px'
    }
  }, "Aucun client trouv\xE9 pour \xAB ", clientQuery, " \xBB.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(KBtn, {
    variant: "primary",
    onClick: () => setStep(2)
  }, "Service \u2192")), (() => {
    const cps = LKK.packsOfClient(client.nom).filter(cp => cp.lignes.some(l => l.used < l.total));
    const subs = LKK.subsOfClient ? LKK.subsOfClient(client.nom) : [];
    if (!cps.length && !subs.length) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        padding: '12px 14px',
        background: 'var(--color-sable)',
        border: '1px solid var(--color-copper)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 9.5,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: 'var(--color-copper)',
        marginBottom: 7
      }
    }, client.nom, " a des avantages actifs"), subs.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: 's' + i,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '3px 0',
        fontFamily: 'var(--font-sans)',
        fontSize: 12.5,
        color: 'var(--ink)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u29C9 ", s.plan), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-soft)'
      }
    }, "prochain ", s.prochaine))), cps.map(cp => cp.lignes.filter(l => l.used < l.total).map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: cp.id + i,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '3px 0',
        fontFamily: 'var(--font-sans)',
        fontSize: 12.5,
        color: 'var(--ink)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u25A5 ", l.svc), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-copper)'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontFamily: 'var(--font-serif)',
        color: 'var(--color-indigo)'
      }
    }, l.total - l.used), " restant", l.total - l.used > 1 ? 's' : '')))));
  })()), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: lblK
  }, "Services \xB7 s\xE9lection multiple"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, LKK.services.map(s => {
    const on = picks.includes(s.id);
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: () => togglePick(s.id),
      style: pickRow(on)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        borderRadius: 5,
        flex: '0 0 auto',
        border: '1.5px solid ' + (on ? 'var(--color-copper)' : 'var(--hairline)'),
        background: on ? 'var(--color-copper)' : 'transparent',
        color: 'var(--color-ivoire)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12
      }
    }, on ? '✓' : ''), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: pickName
    }, s.nom), /*#__PURE__*/React.createElement("span", {
      style: pickSub
    }, s.cat, " \xB7 ", s.duree, s.sessions > 1 ? ` · ${s.sessions} sessions` : '')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 15,
        color: 'var(--color-copper)'
      }
    }, FK(s.prix)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: '12px 14px',
      background: 'var(--color-indigo)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--color-ivoire)'
    }
  }, picked.length, " service", picked.length > 1 ? 's' : '', " s\xE9lectionn\xE9", picked.length > 1 ? 's' : '', multiSvc ? ' · ' + picked.map(s => s.nom).join(', ') : ''), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-copper)'
    }
  }, FK(gross))), (() => {
    const sv = LKK.svcById(svcId) || {};
    const isStyle = /coiff|style|coupe|relook/i.test((sv.nom || '') + ' ' + (sv.cat || ''));
    if (!isStyle) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        padding: '14px 16px',
        background: 'var(--color-sable)',
        border: '1px solid var(--color-copper)',
        borderRadius: 'var(--radius-md)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 17,
        color: 'var(--color-indigo)',
        marginBottom: 4
      }
    }, "Votre inspiration coiffure"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 300,
        fontSize: 12.5,
        color: 'var(--ink-soft)',
        marginBottom: 12
      }
    }, "Partagez un lien Pinterest, ou t\xE9l\xE9versez une photo / vid\xE9o du style souhait\xE9 \u2014 nous le recevons sur la plateforme."), /*#__PURE__*/React.createElement("div", {
      style: lblK
    }, "Lien Pinterest / inspiration"), /*#__PURE__*/React.createElement("input", {
      value: styleLink,
      onChange: e => setStyleLink(e.target.value),
      placeholder: "https://pinterest.com/\u2026",
      style: {
        width: '100%',
        boxSizing: 'border-box',
        border: 'none',
        borderBottom: '1px solid var(--hairline)',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        padding: '7px 2px',
        outline: 'none',
        color: 'var(--ink)',
        marginBottom: 14
      }
    }), /*#__PURE__*/React.createElement("input", {
      ref: styleRef,
      type: "file",
      accept: "image/*,video/*",
      style: {
        display: 'none'
      },
      onChange: e => {
        const f = e.target.files && e.target.files[0];
        if (f) setStyleImg({
          url: URL.createObjectURL(f),
          video: f.type.startsWith('video')
        });
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(KBtn, {
      size: "sm",
      variant: "copper",
      onClick: () => styleRef.current && styleRef.current.click()
    }, "+ Photo / vid\xE9o"), styleImg && (styleImg.video ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--color-indigo)'
      }
    }, "\uD83C\uDFAC Vid\xE9o ajout\xE9e") : /*#__PURE__*/React.createElement("img", {
      src: styleImg.url,
      alt: "",
      style: {
        width: 44,
        height: 44,
        objectFit: 'cover',
        borderRadius: 6,
        border: '1px solid var(--hairline)'
      }
    }))));
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(KBtn, {
    variant: "ghost",
    onClick: () => setStep(1)
  }, "\u2190 Cliente"), /*#__PURE__*/React.createElement(KBtn, {
    variant: "primary",
    onClick: () => setStep(3)
  }, "Cr\xE9neau \u2192"))), step === 3 && /*#__PURE__*/React.createElement("div", null, isPast && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      padding: '12px 14px',
      background: 'var(--copper-50)',
      border: '1px solid var(--copper-100)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: lblK
  }, "Date pass\xE9e (oubli \xE0 rattraper)"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: pastDate,
    onChange: e => setPastDate(e.target.value),
    style: {
      width: '100%',
      border: 'none',
      borderBottom: '1px solid var(--hairline)',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      padding: '6px 2px',
      outline: 'none',
      color: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: markPaid,
    onChange: e => setMarkPaid(e.target.checked)
  }), " Enregistrer le paiement (", FK(net), ") maintenant")), /*#__PURE__*/React.createElement("div", {
    style: lblK
  }, "Jour"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 16,
      opacity: isMulti ? 0.4 : 1,
      pointerEvents: isMulti ? 'none' : 'auto'
    }
  }, ['Jeu 26 juin', 'Ven 27 juin', 'Sam 28 juin', 'Lun 30 juin'].map(d => /*#__PURE__*/React.createElement("button", {
    key: d,
    onClick: () => setDay(d),
    style: chip(d === day)
  }, d))), !isMulti && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: lblK
  }, "Heure"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 16
    }
  }, times.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTime(t),
    style: chip(t === time)
  }, t)))), isMulti && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      padding: '14px 16px',
      background: 'var(--color-sable)',
      border: '1px solid var(--color-copper)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-copper)',
      fontSize: 15
    }
  }, "\u2B21"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, "Installation en ", nbSessions, " sessions")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12.5,
      color: 'var(--ink-soft)',
      marginBottom: 12
    }
  }, "Planifiez chaque session \u2014 dates pr\xE9d\xE9finies (1 / semaine), modifiables. La cliente re\xE7oit le calendrier complet."), sessions.map((ss, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr 1fr',
      gap: 8,
      alignItems: 'center',
      padding: '8px 0',
      borderTop: i ? '1px solid var(--hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--color-indigo)',
      color: 'var(--color-copper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 13,
      flex: '0 0 auto'
    }
  }, i + 1), /*#__PURE__*/React.createElement("select", {
    value: ss.date,
    onChange: e => setSession(i, {
      date: e.target.value
    }),
    style: sessSel
  }, PRESET_DATES.map(d => /*#__PURE__*/React.createElement("option", {
    key: d,
    value: d
  }, d))), /*#__PURE__*/React.createElement("select", {
    value: ss.time,
    onChange: e => setSession(i, {
      time: e.target.value
    }),
    style: sessSel
  }, times.map(t => /*#__PURE__*/React.createElement("option", {
    key: t,
    value: t
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--color-copper)'
    }
  }, "\u21B3 ", nbSessions, " rendez-vous li\xE9s seront cr\xE9\xE9s d'un coup.")), /*#__PURE__*/React.createElement("div", {
    style: lblK
  }, "Ma\xEEtre"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 16
    }
  }, ['Yéman', 'Brice', 'Sékou'].map(m => /*#__PURE__*/React.createElement("button", {
    key: m,
    onClick: () => setStylist(m),
    style: chip(m === stylist)
  }, m))), (() => {
    const cp = LKK.activePackForService(client.nom, svc.nom);
    if (!cp) return null;
    const l = cp.lignes.find(x => x.svc === svc.nom);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        padding: '10px 14px',
        background: 'var(--color-indigo)',
        borderRadius: 'var(--radius-sm)',
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-copper)',
        fontSize: 15
      }
    }, "\u25A5"), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: 'var(--font-sans)',
        fontSize: 12.5,
        color: 'var(--color-ivoire)'
      }
    }, "Couvert par ", /*#__PURE__*/React.createElement("strong", null, cp.pack), " \u2014 d\xE9compt\xE9 automatiquement (", l.total - l.used, " restants \u2192 ", l.total - l.used - 1, ")."));
  })(), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(KBtn, {
    variant: "ghost",
    onClick: () => setStep(2)
  }, "\u2190 Service"), /*#__PURE__*/React.createElement(KBtn, {
    variant: "copper",
    onClick: () => {
      if (isMulti && !multiSvc) {
        LKK.addSessionSeries({
          client: client.nom,
          svc: svc.nom,
          stylist
        }, sessions);
        setDone(true);
        return;
      }
      if (isPast && markPaid) {
        LKK.addInvoice({
          client: client.nom,
          items: picked.map(s => [s.nom, s.prix]),
          total: net,
          paye: net,
          method: 'cash',
          date: pastDate || day
        });
      }
      const rdvLabel = 'RDV ' + day + ' ' + time;
      picked.forEach(s => LKK.autoRedeemOnBooking(client.nom, s.nom, rdvLabel));
      if (!editing && !isPast) {
        LKK.addAppt({
          client: client.nom,
          svc: svcLabel,
          stylist,
          date: day,
          h: time
        });
      }
      setDone(true);
    }
  }, editing ? 'Enregistrer' : isPast ? 'Enregistrer le RDV passé' : isMulti && !multiSvc ? `Créer les ${nbSessions} sessions` : multiSvc ? `Confirmer · ${picked.length} services` : 'Confirmer le RDV'))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-sable)',
      padding: '26px 22px',
      borderLeft: '1px solid var(--hairline)',
      overflowY: 'auto',
      maxHeight: '92vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9.5,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 12
    }
  }, "Vu par la cliente"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 22,
      overflow: 'hidden',
      border: '7px solid #14141B',
      background: '#14141B'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: B.colors.ivoire
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: B.colors.indigo,
      padding: '16px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: B.logo === 'app-icon.png' ? '../../assets/logos/app-icon.png' : `../../assets/monograms/${B.mono}`,
    alt: "",
    style: {
      width: 24,
      borderRadius: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      letterSpacing: '0.14em',
      color: B.colors.ivoire,
      marginTop: 4
    }
  }, B.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: B.colors.copper
    }
  }, "Votre rendez-vous"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)',
      marginTop: 6
    }
  }, svcLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, multiSvc ? picked.length + ' services' : svc.duree, " \xB7 ", stylist), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0',
      height: 1,
      background: 'var(--hairline)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${client.photo})`,
      backgroundSize: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 14,
      color: 'var(--color-indigo)'
    }
  }, client.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      color: 'var(--ink-soft)'
    }
  }, isMulti ? `${nbSessions} sessions` : `${day} · ${time}`))), isMulti && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: 'var(--color-sable)',
      borderRadius: 8,
      padding: '10px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 9,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: B.colors.copper,
      marginBottom: 6
    }
  }, "Votre calendrier d'installation"), sessions.map((ss, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: B.colors.indigo,
      color: B.colors.copper,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-serif)',
      fontSize: 10,
      flex: '0 0 auto'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink)'
    }
  }, ss.date, " \xB7 ", ss.time)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      background: B.colors.indigo,
      borderRadius: 8,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'rgba(255,255,255,0.8)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Tarif"), /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: auto ? 'line-through' : 'none'
    }
  }, FK(svc.prix))), auto && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: B.colors.copper,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "Remise ", auto.label), /*#__PURE__*/React.createElement("span", null, "\u2212", Math.round(auto.pct * 100), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 8,
      paddingTop: 8,
      borderTop: '1px solid rgba(255,255,255,0.15)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'rgba(255,255,255,0.7)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, "\xC0 payer"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: B.colors.ivoire
    }
  }, FK(net)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      textAlign: 'center',
      background: B.colors.copper,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '10px',
      borderRadius: 6
    }
  }, done ? '✓ Confirmé' : 'Confirmer ma réservation')))))));
}
const lblK = {
  fontFamily: 'var(--font-sans)',
  fontSize: 10,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: 10
};
const sessSel = {
  width: '100%',
  padding: '7px 9px',
  borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--hairline)',
  background: 'var(--color-ivoire)',
  fontFamily: 'var(--font-sans)',
  fontSize: 12.5,
  color: 'var(--color-indigo)'
};
const pickRow = on => ({
  display: 'flex',
  alignItems: 'center',
  gap: 11,
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
  padding: '10px 13px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid ' + (on ? 'var(--color-copper)' : 'var(--hairline)'),
  background: on ? 'var(--color-ivoire)' : 'transparent'
});
const pickName = {
  display: 'block',
  fontFamily: 'var(--font-serif)',
  fontSize: 16,
  color: 'var(--color-indigo)'
};
const pickSub = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  color: 'var(--ink-soft)'
};
const chip = on => ({
  fontFamily: 'var(--font-sans)',
  fontSize: 12,
  padding: '8px 14px',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  border: '1px solid ' + (on ? 'var(--color-copper)' : 'var(--hairline)'),
  background: on ? 'var(--color-indigo)' : 'transparent',
  color: on ? 'var(--color-ivoire)' : 'var(--ink-soft)'
});
Object.assign(window, {
  LK_BookingModal: BookingModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensK.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensL.jsx
try { (() => {
/* LOKAA — Screens L: Automations (Zapier-style) + reusable NotesPanel */
const {
  Button: ABtn,
  Badge: ABadge,
  Card: ACard,
  Eyebrow: AEye
} = window.MNDDesignSystem_a962de;
const LA = window.LOKAA;

/* ============ NOTES PANEL (reusable: client + appointment) ============ */
function NotesPanel({
  scope,
  refId,
  compact
}) {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LA.onNotes(force), []);
  const [draft, setDraft] = React.useState('');
  const [editId, setEditId] = React.useState(null);
  const [editBody, setEditBody] = React.useState('');
  const notes = LA.getNotes(scope, refId);
  const add = () => {
    if (!draft.trim()) return;
    LA.saveNote({
      scope,
      ref: refId,
      body: draft.trim()
    });
    setDraft('');
  };
  const saveEdit = n => {
    LA.saveNote({
      ...n,
      body: editBody
    });
    setEditId(null);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    rows: compact ? 2 : 2,
    placeholder: "Ajouter une note interne\u2026",
    style: {
      flex: 1,
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-ivoire)',
      padding: '10px 12px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13.5,
      resize: 'vertical',
      outline: 'none',
      color: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement(ABtn, {
    size: "sm",
    variant: "copper",
    onClick: add
  }, "+ Note")), notes.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13,
      color: 'var(--ink-soft)',
      padding: '8px 0'
    }
  }, "Aucune note pour le moment."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, notes.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    style: {
      background: n.pin ? 'var(--color-sable)' : 'var(--color-ivoire)',
      border: '1px solid var(--hairline)',
      borderLeft: '2px solid ' + (n.pin ? 'var(--color-copper)' : 'var(--hairline)'),
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, n.pin && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-copper)'
    }
  }, "\u2605"), n.author, " \xB7 ", LA.frDate(n.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => LA.saveNote({
      ...n,
      pin: !n.pin
    }),
    title: "\xC9pingler",
    style: iconBtn
  }, n.pin ? '★' : '☆'), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setEditId(n.id);
      setEditBody(n.body);
    },
    title: "Modifier",
    style: iconBtn
  }, "\u270E"), /*#__PURE__*/React.createElement("button", {
    onClick: () => LA.deleteNote(n.id),
    title: "Supprimer",
    style: iconBtn
  }, "\u2715"))), editId === n.id ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("textarea", {
    value: editBody,
    onChange: e => setEditBody(e.target.value),
    rows: 3,
    style: {
      width: '100%',
      border: '1px solid var(--color-copper)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--color-ivoire)',
      padding: '8px 10px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13.5,
      resize: 'vertical',
      outline: 'none',
      color: 'var(--ink)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(ABtn, {
    size: "sm",
    variant: "primary",
    onClick: () => saveEdit(n)
  }, "Enregistrer"), /*#__PURE__*/React.createElement(ABtn, {
    size: "sm",
    variant: "ghost",
    onClick: () => setEditId(null)
  }, "Annuler"))) : /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--ink)',
      margin: 0
    }
  }, n.body)))));
}
const iconBtn = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: 13,
  color: 'var(--ink-soft)',
  padding: 2,
  lineHeight: 1
};

/* ============ AUTOMATIONS MODULE ============ */
function Automations() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LA.onAutomations(force), []);
  const [editor, setEditor] = React.useState(null); // null | {} | automation
  const list = LA.getAutomations();
  const active = list.filter(a => a.on).length;
  const runs = list.reduce((s, a) => s + a.runs, 0);
  if (editor) return /*#__PURE__*/React.createElement(AutomationEditor, {
    draft: editor,
    onClose: () => setEditor(null)
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AEye, null, "Automatisations \xB7 gagnez du temps"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, "Automations.")), /*#__PURE__*/React.createElement(ABtn, {
    variant: "copper",
    onClick: () => setEditor({})
  }, "+ Nouvelle automation")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 24
    }
  }, [['Automations actives', active + ' / ' + list.length], ['Exécutions · 30 j', runs.toLocaleString('fr-FR')], ['Temps estimé gagné', '~38 h / mois']].map((k, i) => /*#__PURE__*/React.createElement(ACard, {
    key: i,
    padding: 20,
    topFilet: i === 0,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, k[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 36,
      color: 'var(--color-indigo)',
      marginTop: 8
    }
  }, k[1])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, list.map(a => {
    const t = LA.triggerById(a.trigger);
    return /*#__PURE__*/React.createElement(ACard, {
      key: a.id,
      padding: 20,
      style: {
        opacity: a.on ? 1 : 0.62
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: a.on ? 'var(--color-indigo)' : 'var(--obsidian-100)',
        color: a.on ? 'var(--color-copper)' : 'var(--obsidian-300)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        flex: '0 0 auto'
      }
    }, t?.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontSize: 19,
        color: 'var(--color-indigo)'
      }
    }, t?.label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--color-copper)'
      }
    }, a.when), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-soft)'
      }
    }, "\u2192"), a.actions.map(ac => {
      const A = LA.actionById(ac);
      return /*#__PURE__*/React.createElement("span", {
        key: ac,
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          fontFamily: 'var(--font-sans)',
          fontSize: 11.5,
          color: 'var(--ink)',
          background: 'var(--color-sable)',
          borderRadius: 'var(--radius-pill)',
          padding: '3px 10px'
        }
      }, A?.icon, " ", A?.label);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 300,
        fontSize: 13,
        color: 'var(--ink-soft)',
        marginTop: 5
      }
    }, a.desc), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        color: 'var(--ink-soft)',
        marginTop: 4
      }
    }, a.filter, " \xB7 ", a.runs, " ex\xE9cutions \xB7 ", a.lastRun)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setEditor(a),
      style: {
        ...iconBtn,
        fontSize: 15,
        color: 'var(--color-indigo)'
      },
      title: "Modifier"
    }, "\u270E"), /*#__PURE__*/React.createElement(Switch, {
      on: a.on,
      onClick: () => LA.toggleAutomation(a.id)
    }))));
  })));
}
function AutomationEditor({
  draft,
  onClose
}) {
  const isNew = !draft.id;
  const [trigger, setTrigger] = React.useState(draft.trigger || 'rdv_a_venir');
  const [when, setWhen] = React.useState(draft.when || '48 h avant');
  const [actions, setActions] = React.useState(draft.actions || ['wa']);
  const [filter, setFilter] = React.useState(draft.filter || 'Tous les RDV');
  const [desc, setDesc] = React.useState(draft.desc || '');
  const toggleAction = id => setActions(a => a.includes(id) ? a.filter(x => x !== id) : [...a, id]);
  const save = () => {
    LA.saveAutomation({
      ...draft,
      trigger,
      when,
      actions,
      filter,
      desc: desc || LA.triggerById(trigger)?.label + ' → ' + actions.map(a => LA.actionById(a)?.label).join(', ')
    });
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 18
    }
  }, "\u2190 Retour"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 32,
      color: 'var(--color-indigo)',
      margin: '0 0 24px'
    }
  }, isNew ? 'Nouvelle automation' : 'Modifier l’automation'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(ACard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--color-copper)',
      color: 'var(--color-ivoire)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600
    }
  }, "1"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, "Quand \xB7 d\xE9clencheur")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, LA.AUTO_TRIGGERS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTrigger(t.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textAlign: 'left',
      cursor: 'pointer',
      padding: '11px 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (trigger === t.id ? 'var(--color-copper)' : 'var(--hairline)'),
      background: trigger === t.id ? 'var(--copper-50)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--color-copper)',
      width: 18
    }
  }, t.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 500,
      color: 'var(--color-indigo)'
    }
  }, t.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, t.desc)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(ACard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--color-copper)',
      color: 'var(--color-ivoire)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600
    }
  }, "2"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, "Alors \xB7 actions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, LA.AUTO_ACTIONS.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.id,
    onClick: () => toggleAction(a.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      textAlign: 'left',
      cursor: 'pointer',
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid ' + (actions.includes(a.id) ? 'var(--color-indigo)' : 'var(--hairline)'),
      background: actions.includes(a.id) ? 'var(--color-indigo)' : 'transparent',
      color: actions.includes(a.id) ? 'var(--color-ivoire)' : 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: actions.includes(a.id) ? 'var(--color-copper)' : 'var(--ink-soft)'
    }
  }, a.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5
    }
  }, a.label))))), /*#__PURE__*/React.createElement(ACard, {
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 14
    }
  }, "3 \xB7 R\xE9glages"), /*#__PURE__*/React.createElement(Field, {
    label: "D\xE9lai / condition"
  }, /*#__PURE__*/React.createElement("input", {
    value: when,
    onChange: e => setWhen(e.target.value),
    style: inp
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Cible / filtre"
  }, /*#__PURE__*/React.createElement("input", {
    value: filter,
    onChange: e => setFilter(e.target.value),
    style: inp
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Description (optionnel)"
  }, /*#__PURE__*/React.createElement("input", {
    value: desc,
    onChange: e => setDesc(e.target.value),
    placeholder: "Auto-g\xE9n\xE9r\xE9e si vide",
    style: inp
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(ABtn, {
    size: "lg",
    variant: "primary",
    onClick: save
  }, isNew ? 'Créer l’automation' : 'Enregistrer'), /*#__PURE__*/React.createElement(ABtn, {
    size: "lg",
    variant: "ghost",
    onClick: onClose
  }, "Annuler")));
}
function Field({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 6
    }
  }, label), children);
}
const inp = {
  width: '100%',
  border: 'none',
  borderBottom: '1px solid var(--hairline)',
  background: 'transparent',
  padding: '8px 2px',
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: 14,
  outline: 'none',
  color: 'var(--ink)'
};
function Switch({
  on,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: 42,
      height: 24,
      borderRadius: 12,
      border: 'none',
      cursor: 'pointer',
      background: on ? 'var(--color-copper)' : 'var(--obsidian-200)',
      position: 'relative',
      flex: '0 0 auto',
      transition: 'background 200ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 200ms'
    }
  }));
}
Object.assign(window, {
  LK_Automations: Automations,
  LK_NotesPanel: NotesPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensL.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/ScreensM.jsx
try { (() => {
/* LOKAA — Screens M: Gestion (per-tenant CRUD: services, produits, staff,
   marketing, modèles, fidélité, abonnements). Add + Edit buttons everywhere. */
const {
  Button: MBtn,
  Badge: MBadge,
  Card: MCard,
  Eyebrow: MEye
} = window.MNDDesignSystem_a962de;
const LM = window.LOKAA;
const FM = LM.money;

/* ---- generic modal shell ---- */
function Modal({
  title,
  children,
  onClose,
  onSave,
  saveLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(20,20,27,0.55)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflowY: 'auto',
      padding: '48px 20px'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(560px, 96vw)',
      background: 'var(--color-ivoire)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 26px',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 24,
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 20,
      color: 'var(--ink-soft)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 26px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: '18px 26px',
      borderTop: '1px solid var(--hairline)',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(MBtn, {
    variant: "ghost",
    onClick: onClose
  }, "Annuler"), /*#__PURE__*/React.createElement(MBtn, {
    variant: "copper",
    onClick: onSave
  }, saveLabel || 'Enregistrer'))));
}
function MField({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)',
      marginBottom: 6
    }
  }, label), children);
}
const minp = {
  width: '100%',
  border: '1px solid var(--hairline)',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--color-ivoire)',
  padding: '10px 12px',
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: 14,
  outline: 'none',
  color: 'var(--ink)',
  boxSizing: 'border-box'
};
function useField(init) {
  const [v, set] = React.useState(init);
  return [v, e => set(e && e.target ? e.target.value : e), set];
}

/* ---- tab shell ---- */
function Gestion() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LM.onData(force), []);
  React.useEffect(() => LM.onBranch(force), []);
  const [tab, setTab] = React.useState('services');
  const tabs = [['services', 'Services'], ['products', 'Produits'], ['staff', 'Staff'], ['marketing', 'Marketing'], ['models', 'Modèles'], ['loyalty', 'Fidélité'], ['subs', 'Abonnements']];
  const b = LM.activeBranch();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(MEye, null, "Gestion \xB7 ", b.name, " \xB7 ", LM.getBrand().name), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '8px 0 0',
      letterSpacing: '-0.01em'
    }
  }, "Catalogue & ressources.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13.5,
      color: 'var(--ink-soft)',
      maxWidth: 640,
      margin: '0 0 22px'
    }
  }, "Chaque branche & white-label g\xE8re ses propres prix, services, produits, \xE9quipe, marketing, mod\xE8les, fid\xE9lit\xE9 et abonnements \u2014 en toute ind\xE9pendance."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      borderBottom: '1px solid var(--hairline)',
      marginBottom: 22,
      flexWrap: 'wrap'
    }
  }, tabs.map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => setTab(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 13px',
      marginRight: 24,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: tab === id ? 'var(--color-indigo)' : 'var(--ink-soft)',
      borderBottom: '2px solid ' + (tab === id ? 'var(--color-copper)' : 'transparent'),
      marginBottom: -1
    }
  }, l))), tab === 'services' && /*#__PURE__*/React.createElement(ServicesTab, null), tab === 'products' && /*#__PURE__*/React.createElement(ProductsTab, null), tab === 'staff' && /*#__PURE__*/React.createElement(StaffTab, null), tab === 'marketing' && /*#__PURE__*/React.createElement(MarketingTab, null), tab === 'models' && /*#__PURE__*/React.createElement(ModelsTab, null), tab === 'loyalty' && /*#__PURE__*/React.createElement(LoyaltyTab, null), tab === 'subs' && /*#__PURE__*/React.createElement(SubsTab, null));
}
function Toolbar({
  label,
  onAdd
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, label), /*#__PURE__*/React.createElement(MBtn, {
    size: "sm",
    variant: "copper",
    onClick: onAdd
  }, "+ Ajouter"));
}
function RowCard({
  children,
  onEdit,
  onDelete,
  onUp,
  onDown
}) {
  const arrow = (dir, fn) => /*#__PURE__*/React.createElement("button", {
    onClick: fn,
    disabled: !fn,
    title: dir < 0 ? 'Monter' : 'Descendre',
    style: {
      background: 'none',
      border: 'none',
      cursor: fn ? 'pointer' : 'default',
      color: fn ? 'var(--color-indigo)' : 'var(--obsidian-200)',
      fontSize: 11,
      lineHeight: 1,
      padding: '1px 4px'
    }
  }, dir < 0 ? '▲' : '▼');
  return /*#__PURE__*/React.createElement(MCard, {
    padding: 16,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, (onUp || onDown) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      flex: '0 0 auto'
    }
  }, arrow(-1, onUp), arrow(1, onDown)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, children), /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    title: "Modifier",
    style: {
      background: 'none',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      width: 34,
      height: 34,
      cursor: 'pointer',
      color: 'var(--color-indigo)',
      fontSize: 14
    }
  }, "\u270E"), /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    title: "Supprimer",
    style: {
      background: 'none',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)',
      width: 34,
      height: 34,
      cursor: 'pointer',
      color: 'var(--ink-soft)',
      fontSize: 13
    }
  }, "\uD83D\uDDD1"));
}

/* ---- reusable: category manager bar (monter/descendre, ajouter, renommer) ---- */
function CategoryBar({
  cats,
  onMove,
  onAdd,
  onRename,
  onRemove
}) {
  const [adding, setAdding] = React.useState(false);
  const [val, setVal] = React.useState('');
  return /*#__PURE__*/React.createElement(MCard, {
    padding: 16,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, "Grandes cat\xE9gories"), /*#__PURE__*/React.createElement(MBtn, {
    size: "sm",
    variant: "ghost",
    onClick: () => setAdding(!adding)
  }, "+ Cat\xE9gorie")), adding && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: val,
    onChange: e => setVal(e.target.value),
    placeholder: "Nouvelle cat\xE9gorie",
    style: {
      ...minp,
      flex: 1
    },
    onKeyDown: e => {
      if (e.key === 'Enter' && val.trim()) {
        onAdd(val.trim());
        setVal('');
        setAdding(false);
      }
    }
  }), /*#__PURE__*/React.createElement(MBtn, {
    size: "sm",
    variant: "copper",
    onClick: () => {
      if (val.trim()) {
        onAdd(val.trim());
        setVal('');
        setAdding(false);
      }
    }
  }, "Ajouter")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, cats.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 10px',
      background: 'var(--color-sable)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onMove(c, -1),
    disabled: i === 0,
    title: "Monter",
    style: {
      background: 'none',
      border: 'none',
      cursor: i === 0 ? 'default' : 'pointer',
      color: i === 0 ? 'var(--obsidian-200)' : 'var(--color-indigo)',
      fontSize: 10,
      lineHeight: 1
    }
  }, "\u25B2"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onMove(c, 1),
    disabled: i === cats.length - 1,
    title: "Descendre",
    style: {
      background: 'none',
      border: 'none',
      cursor: i === cats.length - 1 ? 'default' : 'pointer',
      color: i === cats.length - 1 ? 'var(--obsidian-200)' : 'var(--color-indigo)',
      fontSize: 10,
      lineHeight: 1
    }
  }, "\u25BC")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      color: 'var(--color-indigo)'
    }
  }, c), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const n = prompt('Renommer la catégorie', c);
      if (n && n.trim()) onRename(c, n.trim());
    },
    title: "Renommer",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-soft)',
      fontSize: 12
    }
  }, "\u270E"), onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(c),
    title: "Retirer",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-soft)',
      fontSize: 12
    }
  }, "\uD83D\uDDD1")))));
}

/* ===== SERVICES ===== */
function ServicesTab() {
  const [edit, setEdit] = React.useState(null);
  const cats = LM.getServiceCategories();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CategoryBar, {
    cats: cats,
    onMove: LM.moveCategory,
    onAdd: LM.addServiceCategory,
    onRename: LM.renameServiceCategory,
    onRemove: LM.removeServiceCategory
  }), /*#__PURE__*/React.createElement(Toolbar, {
    label: LM.services.length + ' services',
    onAdd: () => setEdit({})
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, LM.services.map((s, i) => /*#__PURE__*/React.createElement(RowCard, {
    key: s.id,
    onEdit: () => setEdit(s),
    onDelete: () => LM.removeService(s.id),
    onUp: i > 0 ? () => LM.moveItem('services', s.id, -1) : null,
    onDown: i < LM.services.length - 1 ? () => LM.moveItem('services', s.id, 1) : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)'
    }
  }, s.nom), /*#__PURE__*/React.createElement(MBadge, {
    tone: "outline",
    size: "sm"
  }, s.cat)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, s.duree, " \xB7 ", s.sessions, " session(s) \xB7 ", s.skill)))), edit && /*#__PURE__*/React.createElement(ServiceModal, {
    svc: edit,
    onClose: () => setEdit(null)
  }));
}
function ServiceModal({
  svc,
  onClose
}) {
  const [nom, setNom] = useField(svc.nom || '');
  const [cat, setCat] = useField(svc.cat || 'Soin');
  const [prix, setPrix] = useField(svc.prix || 0);
  const [duree, setDuree] = useField(svc.duree || '1 h');
  const [sessions, setSessions] = useField(svc.sessions || 1);
  const [skill, setSkill] = useField(svc.skill || 'Praticien');
  const save = () => {
    const patch = {
      nom,
      cat,
      prix: +prix,
      duree,
      sessions: +sessions,
      skill
    };
    if (svc.id) LM.updateService(svc.id, patch);else LM.addService(patch);
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: svc.id ? 'Modifier le service' : 'Nouveau service',
    onClose: onClose,
    onSave: save
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Nom du service"
  }, /*#__PURE__*/React.createElement("input", {
    value: nom,
    onChange: setNom,
    style: minp,
    placeholder: "Resserrage microlocks"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Cat\xE9gorie"
  }, /*#__PURE__*/React.createElement("select", {
    value: cat,
    onChange: setCat,
    style: minp
  }, LM.getServiceCategories().map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))), /*#__PURE__*/React.createElement(MField, {
    label: 'Prix (' + (LM.CURRENCIES[LM.activeBranch().currency] || {}).symbol + ' base FCFA)'
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: prix,
    onChange: setPrix,
    style: minp
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Dur\xE9e"
  }, /*#__PURE__*/React.createElement("input", {
    value: duree,
    onChange: setDuree,
    style: minp,
    placeholder: "3\u20135 h"
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Sessions"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: sessions,
    onChange: setSessions,
    style: minp
  }))), /*#__PURE__*/React.createElement(MField, {
    label: "Niveau requis"
  }, /*#__PURE__*/React.createElement("select", {
    value: skill,
    onChange: setSkill,
    style: minp
  }, ['Apprenti', 'Praticien', 'Maître'].map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))));
}

/* ===== PRODUCTS ===== */
function ProductsTab() {
  const [edit, setEdit] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Toolbar, {
    label: LM.products.length + ' produits',
    onAdd: () => setEdit({})
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, LM.products.map((p, i) => /*#__PURE__*/React.createElement(RowCard, {
    key: p.id,
    onEdit: () => setEdit(p),
    onDelete: () => LM.removeProduct(p.id),
    onUp: i > 0 ? () => LM.moveItem('products', p.id, -1) : null,
    onDown: i < LM.products.length - 1 ? () => LM.moveItem('products', p.id, 1) : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)'
    }
  }, p.nom), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, p.contenance), p.stock <= p.seuil && /*#__PURE__*/React.createElement(MBadge, {
    tone: "copper",
    size: "sm"
  }, "Stock bas")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, FM(p.prix), " \xB7 co\xFBt ", FM(p.cost), " \xB7 stock ", p.stock)))), edit && /*#__PURE__*/React.createElement(ProductModal, {
    prod: edit,
    onClose: () => setEdit(null)
  }));
}
function ProductModal({
  prod,
  onClose
}) {
  const [nom, setNom] = useField(prod.nom || '');
  const [contenance, setC] = useField(prod.contenance || '');
  const [prix, setPrix] = useField(prod.prix || 0);
  const [cost, setCost] = useField(prod.cost || 0);
  const [stock, setStock] = useField(prod.stock || 0);
  const [seuil, setSeuil] = useField(prod.seuil || 5);
  const save = () => {
    const patch = {
      nom,
      contenance,
      prix: +prix,
      cost: +cost,
      stock: +stock,
      seuil: +seuil
    };
    if (prod.id) LM.updateProduct(prod.id, patch);else LM.addProduct(patch);
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: prod.id ? 'Modifier le produit' : 'Nouveau produit',
    onClose: onClose,
    onSave: save
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Nom du produit"
  }, /*#__PURE__*/React.createElement("input", {
    value: nom,
    onChange: setNom,
    style: minp,
    placeholder: "Huile Couronne"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Contenance"
  }, /*#__PURE__*/React.createElement("input", {
    value: contenance,
    onChange: setC,
    style: minp,
    placeholder: "50 ml"
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Prix de vente (FCFA)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: prix,
    onChange: setPrix,
    style: minp
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Co\xFBt (FCFA)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: cost,
    onChange: setCost,
    style: minp
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Stock"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: stock,
    onChange: setStock,
    style: minp
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Seuil d'alerte"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: seuil,
    onChange: setSeuil,
    style: minp
  }))));
}

/* ===== STAFF ===== */
function StaffTab() {
  const [edit, setEdit] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Toolbar, {
    label: LM.staff.length + ' membres',
    onAdd: () => setEdit({})
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, LM.staff.map((s, i) => /*#__PURE__*/React.createElement(RowCard, {
    key: s.id,
    onEdit: () => setEdit(s),
    onDelete: () => LM.removeStaff(s.id),
    onUp: i > 0 ? () => LM.moveItem('staff', s.id, -1) : null,
    onDown: i < LM.staff.length - 1 ? () => LM.moveItem('staff', s.id, 1) : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      backgroundImage: `url(../../assets/photos/${s.photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, s.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, s.role, " \xB7 ", s.cert, " \xB7 comm. ", Math.round(s.commPct * 100), "%")))))), edit && /*#__PURE__*/React.createElement(StaffModal, {
    m: edit,
    onClose: () => setEdit(null)
  }));
}
function StaffModal({
  m,
  onClose
}) {
  const [nom, setNom] = useField(m.nom || '');
  const [role, setRole] = useField(m.role || 'Praticien');
  const [cert, setCert] = useField(m.cert || 'Niveau I');
  const [base, setBase] = useField(m.base || 0);
  const [commPct, setComm] = useField(m.commPct != null ? Math.round(m.commPct * 100) : 10);
  const save = () => {
    const patch = {
      nom,
      role,
      cert,
      base: +base,
      commPct: +commPct / 100
    };
    if (m.id) LM.updateStaff(m.id, patch);else LM.addStaff(patch);
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: m.id ? 'Modifier le membre' : 'Nouveau membre',
    onClose: onClose,
    onSave: save
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Nom complet"
  }, /*#__PURE__*/React.createElement("input", {
    value: nom,
    onChange: setNom,
    style: minp
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MField, {
    label: "R\xF4le"
  }, /*#__PURE__*/React.createElement("input", {
    value: role,
    onChange: setRole,
    style: minp
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Certification"
  }, /*#__PURE__*/React.createElement("select", {
    value: cert,
    onChange: setCert,
    style: minp
  }, ['Niveau I', 'Niveau II', 'Niveau III'].map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))), /*#__PURE__*/React.createElement(MField, {
    label: "Salaire de base (FCFA)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: base,
    onChange: setBase,
    style: minp
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Commission (%)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: commPct,
    onChange: setComm,
    style: minp
  }))));
}

/* ===== MARKETING (campaigns) ===== */
function MarketingTab() {
  const [edit, setEdit] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Toolbar, {
    label: LM.campaigns.length + ' campagnes',
    onAdd: () => setEdit({})
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, LM.campaigns.map((c, i) => /*#__PURE__*/React.createElement(RowCard, {
    key: c.id,
    onEdit: () => setEdit(c),
    onDelete: () => LM.removeCampaign(c.id),
    onUp: i > 0 ? () => LM.moveItem('campaigns', c.id, -1) : null,
    onDown: i < LM.campaigns.length - 1 ? () => LM.moveItem('campaigns', c.id, 1) : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, c.nom), /*#__PURE__*/React.createElement(MBadge, {
    tone: c.statut === 'Actif' ? 'solid' : 'outline',
    size: "sm"
  }, c.statut)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, c.canal, " \xB7 ", c.cible)))), edit && /*#__PURE__*/React.createElement(CampaignModal, {
    c: edit,
    onClose: () => setEdit(null)
  }));
}
function CampaignModal({
  c,
  onClose
}) {
  const [nom, setNom] = useField(c.nom || '');
  const [canal, setCanal] = useField(c.canal || 'WhatsApp');
  const [cible, setCible] = useField(c.cible || 'Toutes');
  const [statut, setStatut] = useField(c.statut || 'Brouillon');
  const save = () => {
    const patch = {
      nom,
      canal,
      cible,
      statut
    };
    if (c.id) LM.updateCampaign(c.id, patch);else LM.addCampaign(patch);
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: c.id ? 'Modifier la campagne' : 'Nouvelle campagne',
    onClose: onClose,
    onSave: save
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Nom de la campagne"
  }, /*#__PURE__*/React.createElement("input", {
    value: nom,
    onChange: setNom,
    style: minp
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Canal"
  }, /*#__PURE__*/React.createElement("select", {
    value: canal,
    onChange: setCanal,
    style: minp
  }, ['WhatsApp', 'SMS', 'Email'].map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))), /*#__PURE__*/React.createElement(MField, {
    label: "Cible"
  }, /*#__PURE__*/React.createElement("input", {
    value: cible,
    onChange: setCible,
    style: minp
  }))), /*#__PURE__*/React.createElement(MField, {
    label: "Statut"
  }, /*#__PURE__*/React.createElement("select", {
    value: statut,
    onChange: setStatut,
    style: minp
  }, ['Brouillon', 'Programmé', 'Actif', 'Terminé'].map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))));
}

/* ===== MODELS (templates) ===== */
function ModelsTab() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => LM.onTemplates(force), []);
  const [edit, setEdit] = React.useState(null);
  const list = LM.getTemplates();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Toolbar, {
    label: list.length + ' modèles',
    onAdd: () => setEdit({})
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, list.map((t, i) => /*#__PURE__*/React.createElement(RowCard, {
    key: t.id,
    onEdit: () => setEdit(t),
    onDelete: () => {
      LM.saveTemplate({
        ...t,
        _del: 1
      });
      force();
    },
    onUp: i > 0 ? () => LM.moveItem('templates', t.id, -1) : null,
    onDown: i < list.length - 1 ? () => LM.moveItem('templates', t.id, 1) : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MBadge, {
    tone: "outline",
    size: "sm"
  }, t.canal), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, t.nom)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--ink-soft)',
      marginTop: 3,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: 480
    }
  }, t.corps)))), edit && /*#__PURE__*/React.createElement(ModelModal, {
    t: edit,
    onClose: () => setEdit(null)
  }));
}
function ModelModal({
  t,
  onClose
}) {
  const [nom, setNom] = useField(t.nom || '');
  const [canal, setCanal] = useField(t.canal || 'WhatsApp');
  const [objet, setObjet] = useField(t.objet || '');
  const [corps, setCorps] = useField(t.corps || '');
  const save = () => {
    LM.saveTemplate({
      ...t,
      nom,
      canal,
      objet,
      corps,
      statut: t.statut || 'Actif'
    });
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: t.id ? 'Modifier le modèle' : 'Nouveau modèle',
    onClose: onClose,
    onSave: save
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Nom du mod\xE8le"
  }, /*#__PURE__*/React.createElement("input", {
    value: nom,
    onChange: setNom,
    style: minp
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Canal"
  }, /*#__PURE__*/React.createElement("select", {
    value: canal,
    onChange: setCanal,
    style: minp
  }, ['WhatsApp', 'SMS', 'Email'].map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c))))), canal === 'Email' && /*#__PURE__*/React.createElement(MField, {
    label: "Objet"
  }, /*#__PURE__*/React.createElement("input", {
    value: objet,
    onChange: setObjet,
    style: minp
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Corps du message"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: corps,
    onChange: setCorps,
    rows: 4,
    style: {
      ...minp,
      resize: 'vertical'
    },
    placeholder: "Bonjour {prenom}, \u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)'
    }
  }, "Variables : ", '{prenom} {service} {date} {heure} {maison}'));
}

/* ===== LOYALTY (tiers) ===== */
function LoyaltyTab() {
  const [edit, setEdit] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Toolbar, {
    label: LM.loyaltyTiers.length + ' paliers de fidélité',
    onAdd: () => setEdit({})
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, LM.loyaltyTiers.map((t, i) => /*#__PURE__*/React.createElement(RowCard, {
    key: t.key || t.id,
    onEdit: () => setEdit(t),
    onDelete: () => LM.removeLoyaltyTier(t.id || t.key),
    onUp: i > 0 ? () => LM.moveItem('loyaltyTiers', t.id || t.key, -1) : null,
    onDown: i < LM.loyaltyTiers.length - 1 ? () => LM.moveItem('loyaltyTiers', t.id || t.key, 1) : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: t.couleur,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, t.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, "d\xE8s ", t.min, " pts")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, (t.avantages || []).join(' · '))))), edit && /*#__PURE__*/React.createElement(LoyaltyModal, {
    t: edit,
    onClose: () => setEdit(null)
  }));
}
function LoyaltyModal({
  t,
  onClose
}) {
  const [label, setLabel] = useField(t.label || '');
  const [min, setMin] = useField(t.min || 0);
  const [couleur, setCoul] = useField(t.couleur || '#B97A4A');
  const [avantages, setAv] = useField((t.avantages || []).join('\n'));
  const save = () => {
    const patch = {
      label,
      min: +min,
      couleur,
      avantages: avantages.split('\n').map(s => s.trim()).filter(Boolean)
    };
    if (t.id || t.key) LM.updateLoyaltyTier(t.id || t.key, patch);else LM.addLoyaltyTier(patch);
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: t.id || t.key ? 'Modifier le palier' : 'Nouveau palier',
    onClose: onClose,
    onSave: save
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Nom du palier"
  }, /*#__PURE__*/React.createElement("input", {
    value: label,
    onChange: setLabel,
    style: minp,
    placeholder: "Couronne d'or"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Seuil (points)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: min,
    onChange: setMin,
    style: minp
  })), /*#__PURE__*/React.createElement(MField, {
    label: "Couleur"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, ['#9E6238', '#A0A0A8', '#B97A4A', '#1E2150'].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCoul(c),
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: c,
      border: couleur === c ? '2px solid var(--color-indigo)' : '1px solid var(--hairline)',
      cursor: 'pointer'
    }
  }))))), /*#__PURE__*/React.createElement(MField, {
    label: "Avantages (un par ligne)"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: avantages,
    onChange: setAv,
    rows: 3,
    style: {
      ...minp,
      resize: 'vertical'
    }
  })));
}

/* ===== SUBSCRIPTIONS (memberships) ===== */
function SubsTab() {
  const [edit, setEdit] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Toolbar, {
    label: LM.subscriptionPlans.length + ' forfaits / abonnements',
    onAdd: () => setEdit({})
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, LM.subscriptionPlans.map((p, i) => /*#__PURE__*/React.createElement(RowCard, {
    key: p.id,
    onEdit: () => setEdit(p),
    onDelete: () => LM.removeSubPlan(p.id),
    onUp: i > 0 ? () => LM.moveItem('subscriptionPlans', p.id, -1) : null,
    onDown: i < LM.subscriptionPlans.length - 1 ? () => LM.moveItem('subscriptionPlans', p.id, 1) : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, p.nom), p.populaire && /*#__PURE__*/React.createElement(MBadge, {
    tone: "copper",
    size: "sm"
  }, "Populaire"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--color-copper)'
    }
  }, p.economie)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)',
      marginTop: 2
    }
  }, p.cadence, " \xB7 ", FM(p.prix), " \xB7 ", (p.inclus || []).length, " avantage(s)")))), edit && /*#__PURE__*/React.createElement(SubModal, {
    p: edit,
    onClose: () => setEdit(null)
  }));
}
function SubModal({
  p,
  onClose
}) {
  const [nom, setNom] = useField(p.nom || '');
  const [cadence, setCad] = useField(p.cadence || 'Mensuel');
  const [prix, setPrix] = useField(p.prix || 0);
  const [economie, setEco] = useField(p.economie || '');
  const [populaire, setPop] = React.useState(!!p.populaire);
  const [inclus, setInc] = useField((p.inclus || []).join('\n'));
  const save = () => {
    const patch = {
      nom,
      cadence,
      prix: +prix,
      economie,
      populaire,
      inclus: inclus.split('\n').map(s => s.trim()).filter(Boolean)
    };
    if (p.id) LM.updateSubPlan(p.id, patch);else LM.addSubPlan(patch);
    onClose();
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: p.id ? "Modifier l'abonnement" : 'Nouvel abonnement',
    onClose: onClose,
    onSave: save
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Nom de l'abonnement"
  }, /*#__PURE__*/React.createElement("input", {
    value: nom,
    onChange: setNom,
    style: minp
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MField, {
    label: "Cadence"
  }, /*#__PURE__*/React.createElement("select", {
    value: cadence,
    onChange: setCad,
    style: minp
  }, ['Mensuel', 'Trimestriel', 'Annuel'].map(c => /*#__PURE__*/React.createElement("option", {
    key: c
  }, c)))), /*#__PURE__*/React.createElement(MField, {
    label: "Prix (FCFA)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: prix,
    onChange: setPrix,
    style: minp
  })), /*#__PURE__*/React.createElement(MField, {
    label: "\xC9conomie"
  }, /*#__PURE__*/React.createElement("input", {
    value: economie,
    onChange: setEco,
    style: minp,
    placeholder: "\u221220%"
  }))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: populaire,
    onChange: e => setPop(e.target.checked)
  }), " Marquer \xAB Populaire \xBB"), /*#__PURE__*/React.createElement(MField, {
    label: "Inclus (un par ligne)"
  }, /*#__PURE__*/React.createElement("textarea", {
    value: inclus,
    onChange: setInc,
    rows: 3,
    style: {
      ...minp,
      resize: 'vertical'
    }
  })));
}
Object.assign(window, {
  LK_Gestion: Gestion
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/ScreensM.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lokaa/lokaa-data.js
try { (() => {
/* LOKAA — Phase 1 data layer (MND instance "Le Trône")
   In-browser fixture data. Shapes mirror the spec's PostgreSQL schema. */
window.LOKAA = function () {
  const FCFA = n => n.toLocaleString('fr-FR') + ' F';

  // Currencies — rate = how many units of currency per 1 FCFA
  const CURRENCIES = {
    XOF: {
      code: 'XOF',
      label: 'Franc CFA',
      symbol: 'F',
      rate: 1,
      dec: 0
    },
    EUR: {
      code: 'EUR',
      label: 'Euro',
      symbol: '€',
      rate: 0.00152,
      dec: 2
    },
    CAD: {
      code: 'CAD',
      label: 'Dollar canadien',
      symbol: 'CA$',
      rate: 0.00225,
      dec: 2
    },
    USD: {
      code: 'USD',
      label: 'Dollar US',
      symbol: 'US$',
      rate: 0.00166,
      dec: 2
    }
  };
  const branches = [{
    id: 'cot',
    name: 'Cotonou · Flagship',
    city: 'Cotonou',
    pays: 'Bénin',
    chairs: 6,
    currency: 'XOF'
  }, {
    id: 'cal',
    name: 'Calavi · Annexe',
    city: 'Abomey-Calavi',
    pays: 'Bénin',
    chairs: 3,
    currency: 'XOF'
  }, {
    id: 'mtl',
    name: 'Montréal · Diaspora',
    city: 'Montréal',
    pays: 'Canada',
    chairs: 2,
    currency: 'CAD'
  }, {
    id: 'par',
    name: 'Paris · Diaspora',
    city: 'Paris',
    pays: 'France',
    chairs: 2,
    currency: 'EUR'
  }];
  let activeBranchId = 'cot';
  const branchListeners = [];
  const activeBranch = () => branches.find(b => b.id === activeBranchId) || branches[0];
  const setActiveBranch = id => {
    activeBranchId = id;
    branchListeners.forEach(f => f());
  };
  const onBranch = f => {
    branchListeners.push(f);
    return () => {
      const i = branchListeners.indexOf(f);
      if (i >= 0) branchListeners.splice(i, 1);
    };
  };
  const addBranch = b => {
    const id = 'br' + Date.now();
    branches.push({
      id,
      chairs: 1,
      currency: 'XOF',
      ...b
    });
    branchListeners.forEach(f => f());
    return id;
  };
  const updateBranch = (id, patch) => {
    const b = branches.find(x => x.id === id);
    if (b) {
      Object.assign(b, patch);
      branchListeners.forEach(f => f());
    }
  };
  const removeBranch = id => {
    if (branches.length <= 1) return false;
    const i = branches.findIndex(x => x.id === id);
    if (i < 0) return false;
    branches.splice(i, 1);
    if (activeBranchId === id) activeBranchId = branches[0].id;
    branchListeners.forEach(f => f());
    return true;
  };
  const setBranchCurrency = (id, code) => {
    const b = branches.find(x => x.id === id);
    if (b && CURRENCIES[code]) {
      b.currency = code;
      branchListeners.forEach(f => f());
    }
  };

  // money(n): n is in FCFA → formats in the ACTIVE branch currency
  const money = n => {
    const c = CURRENCIES[activeBranch().currency] || CURRENCIES.XOF;
    const v = n * c.rate;
    const s = c.dec ? v.toLocaleString('fr-FR', {
      minimumFractionDigits: c.dec,
      maximumFractionDigits: c.dec
    }) : Math.round(v).toLocaleString('fr-FR');
    return c.code === 'XOF' ? s + ' ' + c.symbol : c.symbol + ' ' + s;
  };
  // compact currency-aware: 2 840 000 → "2,84 M" with active symbol
  const moneyCompact = n => {
    const c = CURRENCIES[activeBranch().currency] || CURRENCIES.XOF;
    const v = n * c.rate;
    let s;
    if (v >= 1e6) s = (v / 1e6).toLocaleString('fr-FR', {
      maximumFractionDigits: 2
    }) + ' M';else if (v >= 1e3) s = Math.round(v / 1e3) + ' k';else s = Math.round(v).toLocaleString('fr-FR');
    return c.code === 'XOF' ? s + ' ' + c.symbol : c.symbol + ' ' + s;
  };

  // Services — loc-native, multi-session aware
  const services = [{
    id: 's-nano',
    nom: 'Création Nano-locks',
    cat: 'Installation',
    prix: 180000,
    duree: '3–5 j',
    sessions: 4,
    skill: 'Maître',
    sop: true,
    profit: 0.62,
    conso: [['pre-pointes', 2], ['huile-couronne', 1]]
  }, {
    id: 's-micro',
    nom: 'Création Microlocks',
    cat: 'Installation',
    prix: 120000,
    duree: '2–3 j',
    sessions: 3,
    skill: 'Praticien',
    sop: true,
    profit: 0.6,
    conso: [['pre-pointes', 1], ['huile-couronne', 1]]
  }, {
    id: 's-fines',
    nom: 'Locks fines (sisterlocks)',
    cat: 'Installation',
    prix: 85000,
    duree: '1–2 j',
    sessions: 2,
    skill: 'Praticien',
    sop: true,
    profit: 0.58
  }, {
    id: 's-resser-micro',
    nom: 'Resserrage microlocks',
    cat: 'Entretien',
    prix: 35000,
    duree: '3–5 h',
    sessions: 1,
    skill: 'Praticien',
    sop: true,
    profit: 0.7,
    conso: [['serum-racines', 1]]
  }, {
    id: 's-resser-fines',
    nom: 'Resserrage locks fines',
    cat: 'Entretien',
    prix: 25000,
    duree: '2–3 h',
    sessions: 1,
    skill: 'Praticien',
    sop: true,
    profit: 0.72
  }, {
    id: 's-soin',
    nom: 'Soin profond rituel',
    cat: 'Soin',
    prix: 18000,
    duree: '1h15',
    sessions: 1,
    skill: 'Praticien',
    sop: true,
    profit: 0.55,
    conso: [['shampoing-naturel', 1], ['huile-couronne', 1]]
  }, {
    id: 's-detox',
    nom: 'Détox cuir chevelu',
    cat: 'Soin',
    prix: 15000,
    duree: '45 min',
    sessions: 1,
    skill: 'Apprenti',
    sop: true,
    profit: 0.6
  }, {
    id: 's-coiffage',
    nom: 'Coiffage & mise en forme',
    cat: 'Coiffure',
    prix: 12000,
    duree: '1 h',
    sessions: 1,
    skill: 'Praticien',
    sop: true,
    profit: 0.7
  }, {
    id: 's-consult',
    nom: 'Consultation premium',
    cat: 'Conseil',
    prix: 10000,
    duree: '45 min',
    sessions: 1,
    skill: 'Maître',
    sop: true,
    profit: 0.9
  }];

  // Products (with stock + cost for auto-deduction)
  const products = [{
    id: 'huile-couronne',
    nom: 'Huile Couronne',
    contenance: '50 ml',
    prix: 18000,
    cost: 6800,
    stock: 42,
    seuil: 15
  }, {
    id: 'shampoing-naturel',
    nom: 'Shampoing Naturel',
    contenance: '250 ml',
    prix: 14000,
    cost: 5200,
    stock: 9,
    seuil: 10
  }, {
    id: 'brume-traditionnelle',
    nom: 'Brume Traditionnelle',
    contenance: '150 ml',
    prix: 12000,
    cost: 4100,
    stock: 28,
    seuil: 12
  }, {
    id: 'serum-racines',
    nom: 'Sérum Racines',
    contenance: '30 ml',
    prix: 16000,
    cost: 6300,
    stock: 6,
    seuil: 10
  }, {
    id: 'beurre-locks',
    nom: 'Beurre Locks',
    contenance: '200 ml',
    prix: 15000,
    cost: 5500,
    stock: 19,
    seuil: 10
  }, {
    id: 'pre-pointes',
    nom: 'Pré-pointes Maison',
    contenance: 'sachet',
    prix: 9000,
    cost: 2600,
    stock: 64,
    seuil: 25
  }];

  // Clients with loc passport (mutable store)
  const clients = [{
    id: 'c1',
    branch: 'cot',
    nom: 'Adjoa K.',
    tel: '+229 01 90 11 22 33',
    email: 'adjoa.k@email.bj',
    ville: 'Cotonou',
    pays: 'Bénin',
    tags: ['VIP', 'Locale', 'Microlocks'],
    persona: 'exigeante',
    photo: 'model-microlocks.jpg',
    dob: '1991-04-12',
    anniv: '12 avr',
    install: '2024-03-02',
    points: 142,
    loc_type: 'Microlocks',
    loc_size: 'Fine',
    densite: '~480 locks',
    maturite: 'Mature',
    maturite_pct: 0.82,
    scalp: 'Sain · légèrement sec',
    allergies: 'Aucune connue',
    depuis: 'Mar 2024',
    visites: 14,
    ltv: 412000,
    tier: 'Couronne d’argent',
    timeline: [{
      d: '02 mar 2024',
      t: 'Démarrage microlocks',
      kind: 'start'
    }, {
      d: '08 juil 2024',
      t: 'Premier resserrage',
      kind: 'soin'
    }, {
      d: '14 déc 2024',
      t: 'Le Couronnement',
      kind: 'event'
    }, {
      d: '20 mar 2025',
      t: 'Soin profond · 1 an',
      kind: 'soin'
    }, {
      d: '12 juin 2025',
      t: 'Resserrage racines',
      kind: 'soin'
    }]
  }, {
    id: 'c2',
    branch: 'par',
    nom: 'Naïma T.',
    tel: '+33 6 12 34 56 78',
    email: 'naima.t@email.fr',
    ville: 'Paris',
    pays: 'France',
    tags: ['Diaspora', 'Fidèle', 'VIP'],
    persona: 'diaspora',
    photo: 'yeman-smile.jpg',
    dob: '1986-11-28',
    anniv: '28 nov',
    install: '2023-09-10',
    points: 228,
    loc_type: 'Locks fines',
    loc_size: 'Sisterlocks',
    densite: '~620 locks',
    maturite: 'Rooted',
    maturite_pct: 0.95,
    scalp: 'Sain',
    allergies: 'Sensibilité parfum',
    depuis: 'Sep 2023',
    visites: 22,
    ltv: 690000,
    tier: 'Couronne d’or',
    timeline: [{
      d: '10 sep 2023',
      t: 'Création sisterlocks',
      kind: 'start'
    }, {
      d: '04 jan 2024',
      t: 'Resserrage + soin',
      kind: 'soin'
    }, {
      d: '18 août 2024',
      t: 'Coloration végétale',
      kind: 'soin'
    }, {
      d: '02 fév 2025',
      t: 'Resserrage (visite diaspora)',
      kind: 'soin'
    }]
  }, {
    id: 'c3',
    branch: 'cot',
    nom: 'Koffi M.',
    tel: '+229 01 55 44 33 22',
    email: 'koffi.m@email.bj',
    ville: 'Cotonou',
    pays: 'Bénin',
    tags: ['Nouveau', 'Homme'],
    persona: 'initie',
    photo: 'brice-portrait.jpg',
    dob: '1998-07-05',
    anniv: '05 juil',
    install: '2025-01-15',
    points: 28,
    loc_type: 'Locks moyennes',
    loc_size: 'Moyenne',
    densite: '~210 locks',
    maturite: 'Budding',
    maturite_pct: 0.34,
    scalp: 'Gras',
    allergies: 'Aucune',
    depuis: 'Jan 2025',
    visites: 3,
    ltv: 96000,
    tier: 'Couronne de bronze',
    timeline: [{
      d: '15 jan 2025',
      t: 'Consultation + démarrage',
      kind: 'start'
    }, {
      d: '28 fév 2025',
      t: 'Premier resserrage',
      kind: 'soin'
    }, {
      d: '10 avr 2025',
      t: 'Détox cuir chevelu',
      kind: 'soin'
    }]
  }, {
    id: 'c4',
    branch: 'cot',
    nom: 'Fatou B.',
    tel: '+1 404 555 0199',
    email: 'fatou.b@email.com',
    ville: 'Atlanta',
    pays: 'États-Unis',
    tags: ['Diaspora', 'Microlocks'],
    persona: 'calme',
    photo: 'portrait-2.jpg',
    dob: '1994-06-30',
    anniv: '30 juin',
    install: '2024-02-20',
    points: 118,
    loc_type: 'Microlocks',
    loc_size: 'Fine',
    densite: '~510 locks',
    maturite: 'Mature',
    maturite_pct: 0.78,
    scalp: 'Sain',
    allergies: 'Aucune',
    depuis: 'Fév 2024',
    visites: 11,
    ltv: 358000,
    tier: 'Couronne d’argent',
    timeline: [{
      d: '20 fév 2024',
      t: 'Création microlocks',
      kind: 'start'
    }, {
      d: '02 sep 2024',
      t: 'Resserrage (visite)',
      kind: 'soin'
    }, {
      d: '14 déc 2024',
      t: 'Le Couronnement',
      kind: 'event'
    }]
  }];

  // Today's appointments
  let today = [{
    id: 'a1',
    branch: 'cot',
    h: '09:00',
    date: 'Jeu. 26 juin',
    dur: 90,
    client: 'c1',
    svc: 's-resser-fines',
    stylist: 'Yéman',
    statut: 'Confirmé',
    day: 0,
    when: 'upcoming'
  }, {
    id: 'a2',
    branch: 'cot',
    h: '10:30',
    date: 'Jeu. 26 juin',
    client: 'c3',
    svc: 's-nano',
    stylist: 'Brice',
    statut: 'En cours',
    day: 1,
    daysTotal: 4,
    when: 'upcoming'
  }, {
    id: 'a3',
    branch: 'cot',
    h: '13:00',
    date: 'Jeu. 26 juin',
    client: 'c4',
    svc: 's-soin',
    stylist: 'Yéman',
    statut: 'Confirmé',
    when: 'upcoming'
  }, {
    id: 'a4',
    branch: 'par',
    h: '15:30',
    date: 'Jeu. 26 juin',
    client: 'c2',
    svc: 's-consult',
    stylist: 'Brice',
    statut: 'À venir',
    when: 'upcoming'
  }, {
    id: 'a0',
    branch: 'cot',
    h: '08:30',
    date: 'Mer. 25 juin',
    client: 'c1',
    svc: 's-soin',
    stylist: 'Yéman',
    statut: 'Terminé',
    when: 'past'
  }];
  const apptListeners = [];
  const onAppts = f => {
    apptListeners.push(f);
    return () => {
      const i = apptListeners.indexOf(f);
      if (i >= 0) apptListeners.splice(i, 1);
    };
  };
  const notifyAppts = () => {
    apptListeners.forEach(f => f());
  };
  const inBranch = a => (a.branch || 'cot') === activeBranchId;
  const upcomingAppts = () => today.filter(a => inBranch(a) && a.statut !== 'Terminé' && a.statut !== 'Annulé');
  const pastAppts = () => today.filter(a => inBranch(a) && (a.statut === 'Terminé' || a.statut === 'Annulé'));
  const markApptDone = id => {
    today = today.map(a => a.id === id ? {
      ...a,
      statut: 'Terminé',
      when: 'past'
    } : a);
    notifyAppts();
  };
  const addAppt = a => {
    const n = {
      id: 'a' + Date.now(),
      branch: activeBranchId,
      date: 'Jeu. 26 juin',
      statut: a.past ? 'Terminé' : 'À venir',
      when: a.past ? 'past' : 'upcoming',
      ...a
    };
    today = a.past ? [...today, n] : [n, ...today];
    notifyAppts();
    return n.id;
  };
  // Multi-session installation: creates N linked appointments sharing a sessionGroup id.
  const addSessionSeries = (base, sessions) => {
    const gid = 'sg' + Date.now();
    const total = sessions.length;
    const ids = sessions.map((s, i) => {
      const n = {
        id: 'a' + Date.now() + '_' + i,
        branch: activeBranchId,
        statut: 'À venir',
        when: 'upcoming',
        client: base.client,
        svc: base.svc,
        stylist: s.stylist || base.stylist,
        date: s.date,
        h: s.time,
        sessionGroup: gid,
        day: i + 1,
        daysTotal: total
      };
      return n;
    });
    today = [...ids, ...today];
    notifyAppts();
    return gid;
  };
  const sessionsOfGroup = gid => today.filter(a => a.sessionGroup === gid).sort((a, b) => (a.day || 0) - (b.day || 0));

  // Recent transactions (POS)
  const txns = [{
    id: 't1',
    client: 'Adjoa K.',
    items: 'Resserrage + Huile Couronne ×2',
    total: 61000,
    method: 'momo',
    t: 'Il y a 14 min'
  }, {
    id: 't2',
    client: 'Walk-in',
    items: 'Brume Traditionnelle',
    total: 12000,
    method: 'cash',
    t: 'Il y a 1 h'
  }, {
    id: 't3',
    client: 'Naïma T.',
    items: 'Coffret Rituel (WhatsApp)',
    total: 46000,
    method: 'whatsapp',
    t: 'Il y a 2 h'
  }];

  // Staff — scheduling, performance, commission, payroll, certifications
  const staff = [{
    id: 'st1',
    nom: 'Yéman Ahouansou',
    role: 'Maître · Co-fondatrice',
    photo: 'yeman-portrait.jpg',
    cert: 'Niveau III',
    base: 250000,
    commPct: 0.15,
    caMois: 1180000,
    rebook: 0.92,
    note: 4.9,
    present: true,
    conges: 0
  }, {
    id: 'st2',
    nom: 'Brice Ahouansou',
    role: 'Maître · Co-fondateur',
    photo: 'brice-portrait.jpg',
    cert: 'Niveau III',
    base: 250000,
    commPct: 0.15,
    caMois: 1040000,
    rebook: 0.89,
    note: 4.9,
    present: true,
    conges: 0
  }, {
    id: 'st3',
    nom: 'Sékou D.',
    role: 'Praticien',
    photo: 'model-microlocks.jpg',
    cert: 'Niveau II',
    base: 130000,
    commPct: 0.12,
    caMois: 420000,
    rebook: 0.74,
    note: 4.6,
    present: true,
    conges: 2
  }, {
    id: 'st4',
    nom: 'Aïcha B.',
    role: 'Apprentie',
    photo: 'portrait-3.jpg',
    cert: 'Niveau I',
    base: 75000,
    commPct: 0.08,
    caMois: 160000,
    rebook: 0.61,
    note: 4.4,
    present: false,
    conges: 1
  }];

  // Marketing campaigns
  const campaigns = [{
    id: 'cp1',
    nom: 'Rappel resserrage · auto',
    canal: 'WhatsApp',
    cible: 'Locks 4–6 sem.',
    envoi: 248,
    ouvert: 0.81,
    statut: 'Actif'
  }, {
    id: 'cp2',
    nom: 'Retour diaspora · décembre',
    canal: 'Email',
    cible: 'Diaspora',
    envoi: 64,
    ouvert: 0.67,
    statut: 'Programmé'
  }, {
    id: 'cp3',
    nom: 'Nouvelle Brume Traditionnelle',
    canal: 'SMS',
    cible: 'Toutes',
    envoi: 312,
    ouvert: 0.44,
    statut: 'Terminé'
  }, {
    id: 'cp4',
    nom: 'Parrainage · soin offert',
    canal: 'WhatsApp',
    cible: 'Fidèles',
    envoi: 88,
    ouvert: 0.73,
    statut: 'Actif'
  }];

  // Loyalty tiers
  const loyalty = [{
    tier: 'Couronne de bronze',
    min: 0,
    perks: 'Suivi rituel · rappels',
    clients: 96,
    couleur: '#9E6238'
  }, {
    tier: 'Couronne d’argent',
    min: 6,
    perks: '+ 1 soin offert / an · accès Couronnement',
    clients: 112,
    couleur: '#A0A0A8'
  }, {
    tier: 'Couronne d’or',
    min: 15,
    perks: '+ créneau prioritaire · coffret anniversaire',
    clients: 40,
    couleur: '#B97A4A'
  }];
  let reviews = [{
    id: 'rv1',
    nom: 'Adjoa K.',
    note: 5,
    txt: 'On m’a appris à porter mes locks comme une couronne.',
    src: 'Google',
    date: 'il y a 2 j',
    reply: 'Merci infiniment Adjoa 👑 Votre couronne nous inspire. À très vite à la Maison.'
  }, {
    id: 'rv2',
    nom: 'Naïma T.',
    note: 5,
    txt: 'Je traverse l’océan pour ce soin. Ça vaut chaque heure de vol.',
    src: 'Google',
    date: 'il y a 5 j',
    reply: ''
  }, {
    id: 'rv3',
    nom: 'Sékou D.',
    note: 4,
    txt: 'Accueil impeccable, résultat net. Je reviens.',
    src: 'Facebook',
    date: 'il y a 1 sem',
    reply: ''
  }];
  const reviewLink = 'https://g.page/r/maison-mnd-cotonou/review';
  const revListeners = [];
  const onReviews = f => {
    revListeners.push(f);
    return () => {
      const i = revListeners.indexOf(f);
      if (i >= 0) revListeners.splice(i, 1);
    };
  };
  const replyReview = (id, reply) => {
    reviews = reviews.map(r => r.id === id ? {
      ...r,
      reply
    } : r);
    revListeners.forEach(f => f());
  };
  const addReview = r => {
    reviews = [{
      id: 'rv' + Date.now(),
      date: "à l'instant",
      reply: '',
      src: 'Google',
      note: 5,
      ...r
    }, ...reviews];
    revListeners.forEach(f => f());
  };

  // Suivi photo des locks · jalons obligatoires
  const PHOTO_MILESTONES = [{
    key: 'creation',
    label: 'Création / réparation',
    months: 0
  }, {
    key: 'm2',
    label: '2 mois',
    months: 2
  }, {
    key: 'm3',
    label: '3 mois',
    months: 3
  }, {
    key: 'm6',
    label: '6 mois',
    months: 6
  }, {
    key: 'm9',
    label: '9 mois',
    months: 9
  }, {
    key: 'y1',
    label: '1 an',
    months: 12
  }];
  // état par client : quels jalons sont faits (sinon dû). install = date de création des locks.
  const photoLog = {
    c1: {
      creation: true,
      m2: true,
      m3: true,
      m6: true,
      m9: false,
      y1: false
    },
    c2: {
      creation: true,
      m2: true,
      m3: true,
      m6: true,
      m9: true,
      y1: true
    },
    c3: {
      creation: true,
      m2: false,
      m3: false,
      m6: false,
      m9: false,
      y1: false
    },
    c4: {
      creation: true,
      m2: true,
      m3: true,
      m6: false,
      m9: false,
      y1: false
    }
  };
  const photoSchedule = clientId => {
    const c = clients.find(x => x.id === clientId);
    if (!c || !c.install) return [];
    const start = new Date(c.install),
      now = new Date('2026-06-26');
    const log = photoLog[clientId] || {};
    return PHOTO_MILESTONES.map(m => {
      const due = new Date(start);
      due.setMonth(due.getMonth() + m.months);
      const done = !!log[m.key];
      const reached = now >= due;
      return {
        ...m,
        dueDate: due,
        done,
        status: done ? 'fait' : reached ? 'dû' : 'à venir'
      };
    });
  };
  const nextPhotoDue = clientId => photoSchedule(clientId).find(m => m.status === 'dû') || null;
  const markPhotoDone = (clientId, key) => {
    if (!photoLog[clientId]) photoLog[clientId] = {};
    photoLog[clientId][key] = true;
    revListeners.forEach(f => f());
  };

  // Invoices (factures) & quotes (devis)
  // Factures : paye = montant déjà encaissé ; pourboire = tip ; statut dérivé (Payée / Partielle / Impayée)
  let invoices = [{
    id: 'F-2026-0148',
    type: 'facture',
    client: 'Adjoa K.',
    date: '26 juin 2026',
    items: [['Resserrage locks fines', 25000], ['Huile Couronne ×2', 36000]],
    total: 61000,
    paye: 61000,
    pourboire: 3000,
    statut: 'Payée',
    method: 'momo'
  }, {
    id: 'F-2026-0147',
    type: 'facture',
    client: 'Naïma T.',
    date: '24 juin 2026',
    items: [['Coffret Rituel', 46000]],
    total: 46000,
    paye: 46000,
    pourboire: 0,
    statut: 'Payée',
    method: 'whatsapp'
  }, {
    id: 'F-2026-0146',
    type: 'facture',
    client: 'Walk-in',
    date: '24 juin 2026',
    items: [['Brume Traditionnelle', 12000]],
    total: 12000,
    paye: 12000,
    pourboire: 0,
    statut: 'Payée',
    method: 'cash'
  }, {
    id: 'F-2026-0145',
    type: 'facture',
    client: 'Fatou B.',
    date: '20 juin 2026',
    items: [['Soin profond rituel', 18000]],
    total: 18000,
    paye: 0,
    pourboire: 0,
    statut: 'Impayée',
    method: '—'
  }, {
    id: 'F-2026-0144',
    type: 'facture',
    client: 'Koffi M.',
    date: '18 juin 2026',
    items: [['Création Nano-locks · acompte', 180000]],
    total: 180000,
    paye: 90000,
    pourboire: 0,
    statut: 'Partielle',
    method: 'momo'
  }, {
    id: 'F-2026-0143',
    type: 'facture',
    client: 'Sékou D.',
    date: '15 juin 2026',
    items: [['Resserrage microlocks', 35000]],
    total: 35000,
    paye: 20000,
    pourboire: 0,
    statut: 'Partielle',
    method: 'cash'
  }, {
    id: 'D-2026-0039',
    type: 'devis',
    client: 'Koffi M.',
    date: '25 juin 2026',
    items: [['Création Nano-locks', 180000], ['Consultation premium', 10000]],
    total: 190000,
    paye: 0,
    pourboire: 0,
    statut: 'Envoyé',
    method: '—',
    valide: '15 juil 2026'
  }, {
    id: 'D-2026-0038',
    type: 'devis',
    client: 'Prospect · Diane O.',
    date: '22 juin 2026',
    items: [['Création Microlocks', 120000]],
    total: 120000,
    paye: 0,
    pourboire: 0,
    statut: 'Accepté',
    method: '—',
    valide: '12 juil 2026'
  }];
  const invListeners = [];
  const onInvoices = f => {
    invListeners.push(f);
    return () => {
      const i = invListeners.indexOf(f);
      if (i >= 0) invListeners.splice(i, 1);
    };
  };
  const notifyInv = () => {
    invListeners.forEach(f => f());
  };
  const _frToday = () => '26 juin 2026';
  const isoToday = () => '2026-06-26';
  const invStatut = inv => {
    if (inv.type === 'devis') return inv.statut;
    const due = inv.total - (inv.paye || 0);
    if (due <= 0) return 'Payée';
    if ((inv.paye || 0) > 0) return 'Partielle';
    return 'Impayée';
  };
  const addInvoice = inv => {
    const n = {
      type: 'facture',
      paye: 0,
      pourboire: 0,
      method: '—',
      items: [],
      total: 0,
      date: _frToday(),
      ...inv
    };
    n.id = n.id || 'F-' + Date.now();
    n.statut = invStatut(n);
    invoices = [n, ...invoices];
    notifyInv();
    return n.id;
  };
  const updateInvoice = (id, patch) => {
    invoices = invoices.map(x => {
      if (x.id !== id) return x;
      const m = {
        ...x,
        ...patch
      };
      m.statut = invStatut(m);
      return m;
    });
    notifyInv();
  };
  const recordPayment = (id, amount, method, date) => {
    invoices = invoices.map(x => {
      if (x.id !== id) return x;
      const paye = Math.min(x.total, (x.paye || 0) + amount);
      const hist = [...(x.payHist || []), {
        amount,
        method: method || '—',
        date: date || _frToday()
      }];
      const m = {
        ...x,
        paye,
        payHist: hist,
        method: method || x.method
      };
      m.statut = invStatut(m);
      return m;
    });
    notifyInv();
  };
  const duplicateInvoice = id => {
    const src = invoices.find(x => x.id === id);
    if (!src) return;
    const n = {
      ...src,
      id: 'F-' + Date.now(),
      date: _frToday(),
      paye: 0,
      pourboire: 0,
      statut: 'Impayée',
      method: '—'
    };
    invoices = [n, ...invoices];
    notifyInv();
    return n.id;
  };
  const unpaidInvoices = () => invoices.filter(x => x.type === 'facture' && invStatut(x) !== 'Payée');
  const outstandingTotal = () => unpaidInvoices().reduce((s, x) => s + (x.total - (x.paye || 0)), 0);
  const removeInvoice = id => {
    invoices = invoices.filter(x => x.id !== id);
    notifyInv();
  };
  const removePayment = (id, idx) => {
    invoices = invoices.map(x => {
      if (x.id !== id) return x;
      const hist = (x.payHist || []).filter((_, i) => i !== idx);
      const paye = hist.reduce((s, p) => s + p.amount, 0);
      const m = {
        ...x,
        payHist: hist,
        paye
      };
      m.statut = invStatut(m);
      return m;
    });
    notifyInv();
  };
  const cancelAppt = id => {
    today = today.map(a => a.id === id ? {
      ...a,
      statut: 'Annulé',
      when: 'past'
    } : a);
    notifyAppts();
  };
  const removeAppt = id => {
    today = today.filter(a => a.id !== id);
    notifyAppts();
  };

  // Consultations (upcoming + recent) for the dashboard block
  const consultations = [{
    client: 'Sékou D.',
    date: 'Auj. · 15:30',
    objet: 'Diagnostic démarrage microlocks',
    maitre: 'Brice',
    statut: 'À venir'
  }, {
    client: 'Diane O.',
    date: 'Demain · 11:00',
    objet: 'Premier RDV — projet locks fines',
    maitre: 'Yéman',
    statut: 'Confirmé'
  }, {
    client: 'Koffi M.',
    date: '28 juin · 16:00',
    objet: 'Plan de soin cuir chevelu gras',
    maitre: 'Brice',
    statut: 'Confirmé'
  }];

  // Week calendar — appointments laid on a grid (day 0 = Mon .. 5 = Sat)
  let week = [{
    id: 'w1',
    day: 1,
    start: 9,
    len: 1.5,
    client: 'Adjoa K.',
    svc: 'Resserrage',
    stylist: 'Yéman',
    tone: 'indigo'
  }, {
    id: 'w2',
    day: 1,
    start: 10.5,
    len: 5,
    client: 'Koffi M.',
    svc: 'Nano-locks J1',
    stylist: 'Brice',
    tone: 'copper'
  }, {
    id: 'w3',
    day: 1,
    start: 13,
    len: 1.25,
    client: 'Fatou B.',
    svc: 'Soin profond',
    stylist: 'Yéman',
    tone: 'indigo'
  }, {
    id: 'w4',
    day: 2,
    start: 9.5,
    len: 5,
    client: 'Koffi M.',
    svc: 'Nano-locks J2',
    stylist: 'Brice',
    tone: 'copper'
  }, {
    id: 'w5',
    day: 2,
    start: 11,
    len: 0.75,
    client: 'Diane O.',
    svc: 'Consultation',
    stylist: 'Yéman',
    tone: 'sable'
  }, {
    id: 'w6',
    day: 2,
    start: 14,
    len: 3,
    client: 'Naïma T.',
    svc: 'Sisterlocks',
    stylist: 'Yéman',
    tone: 'indigo'
  }, {
    id: 'w7',
    day: 3,
    start: 9.5,
    len: 5,
    client: 'Koffi M.',
    svc: 'Nano-locks J3',
    stylist: 'Brice',
    tone: 'copper'
  }, {
    id: 'w8',
    day: 3,
    start: 15,
    len: 1,
    client: 'Adjoa K.',
    svc: 'Détox',
    stylist: 'Sékou',
    tone: 'sable'
  }, {
    id: 'w9',
    day: 4,
    start: 10,
    len: 2.5,
    client: 'Fatou B.',
    svc: 'Resserrage',
    stylist: 'Yéman',
    tone: 'indigo'
  }, {
    id: 'w10',
    day: 4,
    start: 13.5,
    len: 0.75,
    client: 'Koffi M.',
    svc: 'Consultation',
    stylist: 'Brice',
    tone: 'sable'
  }, {
    id: 'w11',
    day: 5,
    start: 9,
    len: 4,
    client: 'Naïma T.',
    svc: 'Coloration',
    stylist: 'Yéman',
    tone: 'copper'
  }, {
    id: 'w12',
    day: 5,
    start: 14,
    len: 1.5,
    client: 'Adjoa K.',
    svc: 'Resserrage',
    stylist: 'Sékou',
    tone: 'indigo'
  }];
  const weekListeners = [];
  const onWeek = f => {
    weekListeners.push(f);
    return () => {
      const i = weekListeners.indexOf(f);
      if (i >= 0) weekListeners.splice(i, 1);
    };
  };
  const moveAppt = (id, day, start) => {
    week = week.map(e => e.id === id ? {
      ...e,
      day,
      start
    } : e);
    weekListeners.forEach(f => f());
  };
  const updateWeekAppt = (id, patch) => {
    week = week.map(e => e.id === id ? {
      ...e,
      ...patch
    } : e);
    weekListeners.forEach(f => f());
  };
  const removeWeekAppt = id => {
    week = week.filter(e => e.id !== id);
    weekListeners.forEach(f => f());
  };
  const duplicateAppt = id => {
    const s = week.find(e => e.id === id);
    if (!s) return;
    const start = Math.min(19 - s.len, s.start + s.len);
    week = [...week, {
      ...s,
      id: 'w' + Date.now(),
      start
    }];
    weekListeners.forEach(f => f());
  };

  // ---- Consultations détaillées (types, sélectionnables, modifiables) ----
  const CONSULT_TYPES = {
    demarrage: {
      label: 'Nouveau projet · démarrage',
      couleur: '#1E2150',
      desc: 'Nouvelle cliente, premier projet de locks'
    },
    'plan-soin': {
      label: 'Plan de soin · expertise',
      couleur: '#B97A4A',
      desc: 'Vient d’ailleurs, a besoin de notre expertise'
    },
    restauration: {
      label: 'Restauration · locks abîmées',
      couleur: '#9E6238',
      desc: 'Réparation, reprise après mauvaise expérience'
    },
    suivi: {
      label: 'Suivi · cliente régulière',
      couleur: '#2C3470',
      desc: 'Bilan d’étape, ajustement du rituel'
    }
  };
  const consultsFull = [{
    id: 'k1',
    client: 'Diane O.',
    nouveau: true,
    type: 'demarrage',
    date: '2026-06-27',
    heure: '11:00',
    maitre: 'Yéman',
    statut: 'Confirmé',
    objectif: 'Démarrer des locks fines, port professionnel discret.',
    budget: 120000,
    diag: {
      longueur: 'Mi-longue (12 cm)',
      nature: 'Crépue 4C',
      cuir: 'Normal',
      densite: 'Forte'
    },
    plan: ['Consultation + choix de la taille', 'Création locks fines (2 sessions)', 'Guide post-création remis', 'Premier resserrage à 6 semaines'],
    notes: 'Cliente hésitante sur la taille — rassurer, montrer exemples microlocks vs fines. Persona Initiée.'
  }, {
    id: 'k2',
    client: 'Naïma T.',
    nouveau: false,
    type: 'plan-soin',
    date: '2026-06-30',
    heure: '15:30',
    maitre: 'Brice',
    statut: 'À venir',
    objectif: 'Plan de soin diaspora — tenir les locks entre deux visites à Cotonou.',
    budget: 38000,
    diag: {
      longueur: 'Longue (40 cm)',
      nature: 'Sisterlocks matures',
      cuir: 'Sain',
      densite: '~620 locks'
    },
    plan: ['Diagnostic complet du cuir chevelu', 'Rituel soin profond', 'Coffret voyage (Brume + Huile Couronne)', 'Calendrier d’entretien à distance'],
    notes: 'Repart à Paris dans 10 jours. Prévoir produits pour 4 mois. Sensibilité parfum.'
  }, {
    id: 'k3',
    client: 'Prospect · Awa S.',
    nouveau: true,
    type: 'restauration',
    date: '2026-07-02',
    heure: '10:00',
    maitre: 'Brice',
    statut: 'À planifier',
    objectif: 'Locks abîmées par un salon précédent — évaluer le sauvetage.',
    budget: 0,
    diag: {
      longueur: 'Variable',
      nature: 'Locks effilochées',
      cuir: 'Irrité',
      densite: 'Inégale'
    },
    plan: ['Diagnostic honnête (sauvetage vs reprise)', 'Détox cuir chevelu apaisante', 'Devis réparation sur mesure', 'Suivi rapproché 3 semaines'],
    notes: 'Cliente méfiante (persona Sceptique). Ne pas attaquer le salon précédent. Mini-consultation gratuite.'
  }, {
    id: 'k4',
    client: 'Koffi M.',
    nouveau: false,
    type: 'suivi',
    date: '2026-06-28',
    heure: '16:00',
    maitre: 'Brice',
    statut: 'Confirmé',
    objectif: 'Cuir chevelu gras — ajuster le rituel d’entretien.',
    budget: 15000,
    diag: {
      longueur: 'Courte',
      nature: 'Locks moyennes (budding)',
      cuir: 'Gras',
      densite: '~210 locks'
    },
    plan: ['Détox cuir chevelu moringa & tea tree', 'Recommander Sérum Racines 3×/sem.', 'Resserrage à 5 semaines', 'Réduire l’huile sur le cuir chevelu'],
    notes: 'Jeune client, budget limité — proposer facilités. Persona Initié, valoriser ses progrès.'
  }];

  // ---- Formulaires de consultation personnalisables (questions + réponses) ----
  // Chaque formulaire est rattaché à un type de consultation ; questions éditables.
  let consultForms = [{
    id: 'cf-demarrage',
    type: 'demarrage',
    titre: 'Questionnaire démarrage de locks',
    actif: true,
    questions: [{
      id: 'q1',
      label: 'Avez-vous déjà porté des locks ?',
      kind: 'radio',
      options: ['Jamais', 'Oui, par le passé', 'Locks actuelles à reprendre'],
      req: true
    }, {
      id: 'q2',
      label: 'Taille de locks souhaitée',
      kind: 'select',
      options: ['Nano-locks', 'Microlocks', 'Locks fines', 'Locks moyennes', 'Je ne sais pas encore'],
      req: true
    }, {
      id: 'q3',
      label: 'Objectif principal',
      kind: 'textarea',
      options: [],
      req: false
    }, {
      id: 'q4',
      label: 'Contraintes professionnelles ?',
      kind: 'radio',
      options: ['Aucune', 'Port discret exigé', 'Cadre créatif libre'],
      req: false
    }, {
      id: 'q5',
      label: 'Budget envisagé',
      kind: 'select',
      options: ['< 50 000 F', '50–100 000 F', '100–200 000 F', '> 200 000 F'],
      req: false
    }]
  }, {
    id: 'cf-plan-soin',
    type: 'plan-soin',
    titre: 'Questionnaire plan de soin',
    actif: true,
    questions: [{
      id: 'q1',
      label: 'Type de locks actuelles',
      kind: 'select',
      options: ['Microlocks', 'Sisterlocks', 'Locks fines', 'Locks moyennes', 'Autre'],
      req: true
    }, {
      id: 'q2',
      label: 'État du cuir chevelu',
      kind: 'radio',
      options: ['Sain', 'Sec', 'Gras', 'Irrité / sensible'],
      req: true
    }, {
      id: 'q3',
      label: 'Allergies ou sensibilités connues',
      kind: 'text',
      options: [],
      req: false
    }, {
      id: 'q4',
      label: 'Fréquence de visite possible',
      kind: 'select',
      options: ['Toutes les 4 sem.', 'Toutes les 6–8 sem.', 'Diaspora · 2–3×/an'],
      req: false
    }]
  }, {
    id: 'cf-restauration',
    type: 'restauration',
    titre: 'Questionnaire restauration',
    actif: true,
    questions: [{
      id: 'q1',
      label: 'Origine des dommages',
      kind: 'textarea',
      options: [],
      req: true
    }, {
      id: 'q2',
      label: 'Depuis combien de temps ?',
      kind: 'select',
      options: ['< 3 mois', '3–12 mois', '> 1 an'],
      req: false
    }, {
      id: 'q3',
      label: 'Avez-vous des photos avant dégradation ?',
      kind: 'radio',
      options: ['Oui', 'Non'],
      req: false
    }]
  }, {
    id: 'cf-suivi',
    type: 'suivi',
    titre: 'Questionnaire suivi régulier',
    actif: true,
    questions: [{
      id: 'q1',
      label: 'Satisfaction depuis la dernière visite',
      kind: 'radio',
      options: ['Très satisfaite', 'Satisfaite', 'Des points à ajuster'],
      req: true
    }, {
      id: 'q2',
      label: 'Évolution du cuir chevelu',
      kind: 'text',
      options: [],
      req: false
    }, {
      id: 'q3',
      label: 'Produits utilisés à domicile',
      kind: 'textarea',
      options: [],
      req: false
    }]
  }];
  const cfListeners = [];
  const onConsultForms = f => {
    cfListeners.push(f);
    return () => {
      const i = cfListeners.indexOf(f);
      if (i >= 0) cfListeners.splice(i, 1);
    };
  };
  const notifyCF = () => cfListeners.forEach(f => f());
  const formByType = type => consultForms.find(f => f.type === type) || null;
  const addConsultForm = type => {
    const t = CONSULT_TYPES[type] ? CONSULT_TYPES[type].label : 'Consultation';
    const nf = {
      id: 'cf-' + Date.now(),
      type,
      titre: 'Questionnaire ' + t.toLowerCase(),
      actif: true,
      questions: []
    };
    consultForms = [...consultForms, nf];
    notifyCF();
    return nf;
  };
  const updateConsultForm = (id, patch) => {
    consultForms = consultForms.map(f => f.id === id ? {
      ...f,
      ...patch
    } : f);
    notifyCF();
  };
  const removeConsultForm = id => {
    consultForms = consultForms.filter(f => f.id !== id);
    notifyCF();
  };
  const addFormQuestion = (formId, q) => {
    consultForms = consultForms.map(f => f.id === formId ? {
      ...f,
      questions: [...f.questions, {
        id: 'q' + Date.now(),
        label: 'Nouvelle question',
        kind: 'text',
        options: [],
        req: false,
        ...q
      }]
    } : f);
    notifyCF();
  };
  const updateFormQuestion = (formId, qId, patch) => {
    consultForms = consultForms.map(f => f.id === formId ? {
      ...f,
      questions: f.questions.map(q => q.id === qId ? {
        ...q,
        ...patch
      } : q)
    } : f);
    notifyCF();
  };
  const removeFormQuestion = (formId, qId) => {
    consultForms = consultForms.map(f => f.id === formId ? {
      ...f,
      questions: f.questions.filter(q => q.id !== qId)
    } : f);
    notifyCF();
  };
  const moveFormQuestion = (formId, qId, dir) => {
    consultForms = consultForms.map(f => {
      if (f.id !== formId) return f;
      const qs = [...f.questions];
      const i = qs.findIndex(q => q.id === qId);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= qs.length) return f;
      [qs[i], qs[j]] = [qs[j], qs[i]];
      return {
        ...f,
        questions: qs
      };
    });
    notifyCF();
  };

  // ---- White-label · plans & fonctionnalités ----
  // Toujours inclus (cœur CRM) : Tableau de bord · Rendez-vous · Têtes couronnées · Paramètres
  const PLANS = {
    starter: {
      label: 'Starter',
      prix: '15 000 F/mois',
      desc: 'CRM essentiel : agenda, planning, profils clients.',
      features: {
        calendar: true,
        consultations: false,
        pos: false,
        invoices: false,
        quotes: false,
        inventory: false,
        finance: false,
        staff: false,
        marketing: false,
        loyalty: true,
        referral: false,
        subscriptions: false,
        storefront: false,
        ai: false,
        analytics: false,
        web: false,
        templates: false,
        multibranch: false
      }
    },
    studio: {
      label: 'Studio',
      prix: '45 000 F/mois',
      desc: 'Le salon complet : caisse, stock, factures, consultations.',
      features: {
        calendar: true,
        consultations: true,
        pos: true,
        invoices: true,
        quotes: true,
        inventory: true,
        finance: true,
        staff: false,
        marketing: false,
        loyalty: true,
        referral: true,
        subscriptions: true,
        storefront: true,
        ai: false,
        analytics: false,
        web: false,
        templates: false,
        multibranch: false
      }
    },
    maison: {
      label: 'Maison',
      prix: '90 000 F/mois',
      desc: 'Premium : équipe, marketing, IA, analytique.',
      features: {
        calendar: true,
        consultations: true,
        pos: true,
        invoices: true,
        quotes: true,
        inventory: true,
        finance: true,
        staff: true,
        marketing: true,
        loyalty: true,
        referral: true,
        subscriptions: true,
        storefront: true,
        ai: true,
        analytics: true,
        web: true,
        templates: true,
        multibranch: false
      }
    },
    franchise: {
      label: 'Franchise',
      prix: 'Sur mesure',
      desc: 'Tout, multi-succursales.',
      features: {
        calendar: true,
        consultations: true,
        pos: true,
        invoices: true,
        quotes: true,
        inventory: true,
        finance: true,
        staff: true,
        marketing: true,
        loyalty: true,
        referral: true,
        subscriptions: true,
        storefront: true,
        ai: true,
        analytics: true,
        web: true,
        templates: true,
        multibranch: true
      }
    }
  };
  const FEATURE_LABELS = {
    calendar: 'Calendrier',
    consultations: 'Consultations',
    pos: 'Caisse · POS',
    invoices: 'Factures',
    quotes: 'Devis',
    inventory: 'Gamme & stock',
    finance: 'Finances',
    staff: 'Personnel & paie',
    marketing: 'Marketing & campagnes',
    loyalty: 'Programme fidélité',
    referral: 'Parrainage & fidélité',
    subscriptions: 'Forfaits & abonnements',
    storefront: 'Vitrine client',
    ai: 'Recommandations IA',
    analytics: 'Analytics',
    web: 'Audience web & SEO',
    templates: 'Modèles email & SMS',
    multibranch: 'Multi-succursales',
    automations: 'Automatisations'
  };

  // ---- White-label · marque du locataire (tenant) ----
  let brand = {
    name: 'Maison MND',
    sub: 'Le Trône',
    logo: 'app-icon.png',
    mono: 'mono-copper.png',
    colors: {
      indigo: '#1E2150',
      copper: '#B97A4A',
      obsidian: '#14141B',
      ivoire: '#F6F1E7'
    },
    contact: 'contact@mnd.bj',
    tel: '+229 01 96 75 60 62',
    city: 'Cotonou, Bénin',
    signature: 'mi nyɔ́ ɖɛkpɛ',
    plan: 'maison',
    features: {
      ...PLANS.maison.features
    }
  };
  const brandPresets = [{
    key: 'mnd',
    name: 'Maison MND',
    sub: 'Le Trône',
    logo: 'app-icon.png',
    mono: 'mono-copper.png',
    colors: {
      indigo: '#1E2150',
      copper: '#B97A4A',
      obsidian: '#14141B',
      ivoire: '#F6F1E7'
    },
    contact: 'contact@mnd.bj',
    tel: '+229 01 96 75 60 62',
    city: 'Cotonou, Bénin',
    signature: 'mi nyɔ́ ɖɛkpɛ',
    plan: 'franchise',
    features: {
      ...PLANS.franchise.features
    }
  }, {
    key: 'eburnea',
    name: 'Maison Éburnéa',
    sub: 'Abidjan',
    logo: 'mono-indigo.png',
    mono: 'mono-indigo.png',
    colors: {
      indigo: '#1B3A2E',
      copper: '#C8962F',
      obsidian: '#13201A',
      ivoire: '#F4F0E6'
    },
    contact: 'hello@eburnea.ci',
    tel: '+225 07 00 00 00',
    city: 'Abidjan, Côte d’Ivoire',
    signature: 'la beauté enracinée',
    plan: 'studio',
    features: {
      ...PLANS.studio.features
    }
  }, {
    key: 'aya',
    name: 'Studio AYA Locs',
    sub: 'Dakar',
    logo: 'mono-obsidian.png',
    mono: 'mono-obsidian.png',
    colors: {
      indigo: '#4A2A4D',
      copper: '#C77F59',
      obsidian: '#1E1320',
      ivoire: '#F5EFE9'
    },
    contact: 'studio@ayalocs.sn',
    tel: '+221 77 000 00 00',
    city: 'Dakar, Sénégal',
    signature: 'porter sa couronne',
    plan: 'starter',
    features: {
      ...PLANS.starter.features
    }
  }];
  const brandListeners = [];
  const getBrand = () => brand;
  const setBrand = patch => {
    brand = {
      ...brand,
      ...patch
    };
    brandListeners.forEach(f => f(brand));
  };
  // Register a NEW white-label account (saved to the list) and switch to it
  const registerBrand = data => {
    const key = 'wl' + Date.now();
    const preset = {
      key,
      sub: data.city || '',
      logo: data.mono || 'app-icon.png',
      mono: data.mono || 'mono-copper.png',
      ...data
    };
    brandPresets.push(preset);
    brand = {
      ...brand,
      ...preset
    };
    brandListeners.forEach(f => f(brand));
    return key;
  };
  // Update an existing registered account by key
  const updateBrandPreset = (key, data) => {
    const p = brandPresets.find(x => x.key === key);
    if (!p) return;
    Object.assign(p, data);
    if ((brand.key || 'mnd') === key) {
      brand = {
        ...brand,
        ...data
      };
    }
    brandListeners.forEach(f => f(brand));
  };
  const removeBrandPreset = key => {
    if (key === 'mnd') return false; // the house brand is permanent
    const i = brandPresets.findIndex(x => x.key === key);
    if (i < 0) return false;
    brandPresets.splice(i, 1);
    if ((brand.key || 'mnd') === key) {
      brand = {
        ...brand,
        ...brandPresets[0]
      };
    }
    brandListeners.forEach(f => f(brand));
    return true;
  };
  const onBrand = f => {
    brandListeners.push(f);
    return () => {
      const i = brandListeners.indexOf(f);
      if (i >= 0) brandListeners.splice(i, 1);
    };
  };

  // ---- Catalogue · descriptions produits & services (par tenant) ----
  const PROD_DESC = {
    'huile-couronne': 'Huile scellante avocat · karité · cacao. Discipline et fait briller le lock.',
    'shampoing-naturel': 'Lavant doux moringa · niaouli · tea tree. Cuir chevelu assaini.',
    'brume-traditionnelle': 'Brume romarin · basilic · bissap · menthe. Le geste de fraîcheur quotidien.',
    'serum-racines': 'Sérum carotte · moringa · tea tree. Booste la pousse en cure.',
    'beurre-locks': 'Beurre karité · cacao · avocat. Nourrit et définit chaque lock.',
    'pre-pointes': 'Pré-pointes faites main pour démarrer ou allonger les locks.'
  };
  const SVC_DESC = {
    's-nano': 'La création la plus fine — densité maximale, finition reine. Signature MND.',
    's-micro': 'Finesse et mouvement. Le grand classique souverain.',
    's-fines': 'Sisterlocks : définition précise, port naturel.',
    's-resser-micro': 'Reprise des repousses microlocks, mèche par mèche.',
    's-resser-fines': 'Resserrage locks fines, vérification de chaque lock.',
    's-soin': 'Shampoing + masque plantes + huile scellante.',
    's-detox': 'Gommage doux moringa & tea tree.',
    's-consult': 'Diagnostic, plan de soin et guide post-soin personnalisé.'
  };
  const withProdDesc = arr => arr.map(p => ({
    ...p,
    desc: p.desc || PROD_DESC[p.id] || ''
  }));
  const withSvcDesc = arr => arr.map(s => ({
    ...s,
    desc: s.desc || SVC_DESC[s.id] || ''
  }));

  // ---- Journal de caisse · transactions du jour (mutable) ----
  let cashJournal = [{
    id: 'CX-0904',
    t: '08:42',
    client: 'Walk-in',
    label: 'Brume Traditionnelle',
    method: 'cash',
    amount: 12000
  }, {
    id: 'CX-0905',
    t: '09:30',
    client: 'Adjoa K.',
    label: 'Resserrage + Huile Couronne ×2',
    method: 'momo',
    amount: 61000
  }, {
    id: 'CX-0906',
    t: '11:15',
    client: 'Naïma T.',
    label: 'Coffret Rituel (WhatsApp)',
    method: 'whatsapp',
    amount: 46000
  }, {
    id: 'CX-0907',
    t: '12:48',
    client: 'Walk-in',
    label: 'Sérum Racines',
    method: 'card',
    amount: 16000
  }];
  const cashListeners = [];
  let cxSeq = 908;
  const getCash = () => cashJournal;
  const addCash = tx => {
    const now = new Date();
    const entry = {
      id: 'CX-0' + cxSeq++,
      t: now.toTimeString().slice(0, 5),
      ...tx
    };
    cashJournal = [entry, ...cashJournal];
    cashListeners.forEach(f => f(cashJournal));
    return entry;
  };
  const onCash = f => {
    cashListeners.push(f);
    return () => {
      const i = cashListeners.indexOf(f);
      if (i >= 0) cashListeners.splice(i, 1);
    };
  };

  // ---- Finances · séries par période + comparaison N-1 ----
  const finance = {
    semaine: {
      label: 'Cette semaine',
      total: 684000,
      prev: 598000,
      unit: 'jour',
      points: [['Lun', 92], ['Mar', 118], ['Mer', 76], ['Jeu', 140], ['Ven', 110], ['Sam', 148]],
      prevPoints: [82, 96, 70, 112, 104, 134]
    },
    mois: {
      label: 'Ce mois',
      total: 2840000,
      prev: 2410000,
      unit: 'semaine',
      points: [['S1', 620], ['S2', 710], ['S3', 660], ['S4', 850]],
      prevPoints: [560, 600, 590, 660]
    },
    annee: {
      label: 'Cette année',
      total: 14000000,
      prev: 11200000,
      unit: 'mois',
      points: [['Jan', 1900], ['Fév', 2100], ['Mar', 2400], ['Avr', 2200], ['Mai', 2410], ['Juin', 2840]],
      prevPoints: [1500, 1620, 1780, 1700, 1850, 2050]
    }
  };

  // ---- Web analytics · site & page de réservation ----
  const webAnalytics = {
    kpis: {
      visites: 3248,
      visiteurs: 2106,
      booking: 412,
      tauxConv: 0.127,
      dureeMoy: '2 min 48 s'
    },
    pages: [{
      page: 'Accueil',
      vues: 1820,
      duree: '1 min 52 s',
      part: 0.42
    }, {
      page: 'Réservation',
      vues: 612,
      duree: '3 min 41 s',
      part: 0.21
    }, {
      page: 'La Gamme / Boutique',
      vues: 498,
      duree: '2 min 16 s',
      part: 0.17
    }, {
      page: 'Menu de soins',
      vues: 364,
      duree: '2 min 58 s',
      part: 0.13
    }, {
      page: 'Académie',
      vues: 142,
      duree: '1 min 34 s',
      part: 0.07
    }],
    sources: [['Instagram', 38], ['Recherche Google', 27], ['WhatsApp', 18], ['Direct', 11], ['Facebook', 6]],
    funnel: [['Visite du site', 3248], ['Page réservation', 612], ['Formulaire démarré', 268], ['RDV confirmé', 412]],
    live: [{
      who: 'Adjoa K.',
      known: true,
      clientId: 'c1',
      page: 'Réservation',
      ville: 'Cotonou',
      duree: '3:12',
      device: 'Mobile · iPhone',
      action: 'Remplit le formulaire RDV'
    }, {
      who: 'Naïma T.',
      known: true,
      clientId: 'c2',
      page: 'La Gamme / Boutique',
      ville: 'Paris',
      duree: '1:48',
      device: 'Desktop · Chrome',
      action: 'Panier : Huile Couronne ×2'
    }, {
      who: 'Visiteur anonyme',
      known: false,
      page: 'Accueil',
      ville: 'Abidjan',
      duree: '0:34',
      device: 'Mobile · Android',
      action: 'Première visite · source Instagram'
    }, {
      who: 'Koffi M.',
      known: true,
      clientId: 'c3',
      page: 'Menu de soins',
      ville: 'Cotonou',
      duree: '2:05',
      device: 'Mobile · Android',
      action: 'Consulte les tarifs entretien'
    }],
    seo: {
      score: 86,
      vitals: [['LCP · chargement', '1,9 s', 'bon'], ['INP · réactivité', '180 ms', 'bon'], ['CLS · stabilité', '0,04', 'bon'], ['Mobile-friendly', '100%', 'bon']],
      keywords: [['locks cotonou', 3, 720, 'up'], ['salon dreadlocks bénin', 1, 480, 'up'], ['microlocks afrique', 5, 390, 'flat'], ['entretien locks naturel', 2, 310, 'up'], ['sisterlocks cotonou', 4, 210, 'down']],
      meta: {
        title: 'Maison MND · Soin premium des locks à Cotonou',
        desc: 'Création, entretien et soin naturel des locks. 20 ans d\'expertise. Réservez votre rituel à Cotonou.',
        titleLen: 47,
        descLen: 118
      },
      checklist: [['Balises title & meta description', true], ['Sitemap.xml soumis', true], ['Schema.org · HairSalon', true], ['Page réservation indexée', true], ['Images en WebP + alt', false], ['Blog / contenu régulier', false]]
    }
  };

  // ---- Modèles marketing · email & SMS (mutable) ----
  let templates = [{
    id: 'tpl-rdv',
    canal: 'SMS',
    nom: 'Rappel de rendez-vous',
    objet: '',
    corps: 'Bonjour {prenom}, rappel de votre RDV {service} le {date} à {heure} chez {maison}. À très vite 👑',
    tags: ['{prenom}', '{service}', '{date}', '{heure}'],
    statut: 'Actif'
  }, {
    id: 'tpl-bienvenue',
    canal: 'Email',
    nom: 'Bienvenue · nouvelle cliente',
    objet: 'Bienvenue à la Maison, {prenom}',
    corps: 'Tête couronnée, bienvenue. Voici votre guide post-soin et le rituel recommandé pour vos locks. La Maison vous accompagne, mèche après mèche.',
    tags: ['{prenom}'],
    statut: 'Actif'
  }, {
    id: 'tpl-anniv',
    canal: 'SMS',
    nom: 'Anniversaire',
    objet: '',
    corps: 'Joyeux anniversaire {prenom} ! 🎉 La Maison vous offre -15% sur votre prochain soin ce mois-ci.',
    tags: ['{prenom}'],
    statut: 'Actif'
  }, {
    id: 'tpl-relance',
    canal: 'Email',
    nom: 'Relance · resserrage dû',
    objet: 'Vos locks méritent un resserrage, {prenom}',
    corps: 'Cela fait {semaines} semaines depuis votre dernier rendez-vous. Réservez votre resserrage pour garder une couronne nette et saine.',
    tags: ['{prenom}', '{semaines}'],
    statut: 'Brouillon'
  }, {
    id: 'tpl-coffret',
    canal: 'WhatsApp',
    nom: 'Coffret diaspora',
    objet: '',
    corps: 'Bonjour {prenom}, avant votre départ, pensez au coffret voyage (Brume + Huile Couronne) pour tenir vos locks à l\'étranger. Souhaitez-vous que je le prépare ?',
    tags: ['{prenom}'],
    statut: 'Actif'
  }];
  const tplListeners = [];
  const getTemplates = () => cur().templates;
  const saveTemplate = t => {
    const st = cur();
    if (t._del) {
      st.templates = st.templates.filter(x => x.id !== t.id);
      tplListeners.forEach(f => f(st.templates));
      branchListeners.forEach(f => f());
      return;
    }
    if (t.id && st.templates.some(x => x.id === t.id)) st.templates = st.templates.map(x => x.id === t.id ? {
      ...t
    } : x);else st.templates = [{
      ...t,
      id: 'tpl-' + Date.now()
    }, ...st.templates];
    tplListeners.forEach(f => f(st.templates));
    branchListeners.forEach(f => f());
  };
  const onTemplates = f => {
    tplListeners.push(f);
    return () => {
      const i = tplListeners.indexOf(f);
      if (i >= 0) tplListeners.splice(i, 1);
    };
  };

  // ---- WhatsApp · fils de discussion ----
  const waConnected = {
    connected: true,
    number: '+229 01 96 75 60 62',
    name: 'Maison MND'
  };
  const waThreads = [{
    id: 'c1',
    client: 'Adjoa K.',
    photo: 'model-microlocks.jpg',
    unread: 2,
    last: 'Je serai là à 9h, merci !',
    t: '09:02',
    msgs: [{
      me: false,
      txt: 'Bonjour, mon RDV est bien confirmé pour demain ?',
      t: '08:58'
    }, {
      me: true,
      txt: 'Bonjour Adjoa 👑 Oui, resserrage demain 9h avec Yéman. À demain !',
      t: '09:00'
    }, {
      me: false,
      txt: 'Je serai là à 9h, merci !',
      t: '09:02'
    }]
  }, {
    id: 'c2',
    client: 'Naïma T.',
    photo: 'yeman-smile.jpg',
    unread: 0,
    last: 'Parfait, préparez le coffret 🙏',
    t: 'Hier',
    msgs: [{
      me: true,
      txt: 'Bonjour Naïma, souhaitez-vous le coffret voyage avant votre départ ?',
      t: 'Hier'
    }, {
      me: false,
      txt: 'Parfait, préparez le coffret 🙏',
      t: 'Hier'
    }]
  }, {
    id: 'c3',
    client: 'Koffi M.',
    photo: 'brice-portrait.jpg',
    unread: 1,
    last: 'Quel est le prix du resserrage ?',
    t: 'Hier',
    msgs: [{
      me: false,
      txt: 'Quel est le prix du resserrage ?',
      t: 'Hier'
    }]
  }];

  // ---- Paiements · fournisseurs (Bénin / Afrique de l'Ouest) ----
  const paymentProviders = [{
    id: 'mtn',
    nom: 'MTN Mobile Money',
    type: 'Mobile Money',
    on: true,
    desc: 'Paiement & encaissement MTN MoMo.',
    frais: '1,5%'
  }, {
    id: 'kkiapay',
    nom: 'KkiaPay',
    type: 'Agrégateur',
    on: true,
    desc: 'Cartes, MoMo & wallets en un seul lien.',
    frais: '1,8%'
  }, {
    id: 'celtiis',
    nom: 'Celtiis Pay',
    type: 'Mobile Money',
    on: true,
    desc: 'Wallet Celtiis (Bénin).',
    frais: '1,5%'
  }, {
    id: 'moov',
    nom: 'Moov Money',
    type: 'Mobile Money',
    on: true,
    desc: 'Paiement Moov Africa.',
    frais: '1,5%'
  }, {
    id: 'cash',
    nom: 'Espèces',
    type: 'Caisse',
    on: true,
    desc: 'Encaissement au comptoir.',
    frais: '—'
  }, {
    id: 'card',
    nom: 'Carte bancaire',
    type: 'International',
    on: false,
    desc: 'Visa / Mastercard (diaspora).',
    frais: '2,9%'
  }];

  // ---- Dépenses · plan comptable SYSCOHADA (OHADA · classe 6 Charges) ----
  const expenseCats = [{
    code: '60',
    nom: 'Achats',
    couleur: '#1E2150',
    subs: [{
      code: '601',
      nom: 'Matières & fournitures (formules, plantes)'
    }, {
      code: '6055',
      nom: 'Petit matériel & consommables salon'
    }, {
      code: '6033',
      nom: 'Variation de stocks de marchandises'
    }]
  }, {
    code: '61',
    nom: 'Transports',
    couleur: '#2C3470',
    subs: [{
      code: '611',
      nom: 'Transport sur achats / livraisons'
    }, {
      code: '614',
      nom: 'Déplacements du personnel'
    }]
  }, {
    code: '62',
    nom: 'Services extérieurs A',
    couleur: '#B97A4A',
    subs: [{
      code: '622',
      nom: 'Locations (loyer salon-atelier)'
    }, {
      code: '624',
      nom: 'Entretien, réparations & maintenance'
    }, {
      code: '625',
      nom: 'Primes d’assurance'
    }]
  }, {
    code: '63',
    nom: 'Services extérieurs B',
    couleur: '#9E6238',
    subs: [{
      code: '631',
      nom: 'Frais bancaires & commissions (MoMo, KkiaPay)'
    }, {
      code: '632',
      nom: 'Honoraires (comptable, conseil)'
    }, {
      code: '633',
      nom: 'Publicité & marketing (Meta, Google)'
    }, {
      code: '638',
      nom: 'Télécom, internet & abonnements (LOKAA)'
    }]
  }, {
    code: '64',
    nom: 'Impôts & taxes',
    couleur: '#4E5790',
    subs: [{
      code: '641',
      nom: 'Impôts & taxes directs'
    }, {
      code: '646',
      nom: 'Droits & patente'
    }]
  }, {
    code: '66',
    nom: 'Charges de personnel',
    couleur: '#14141B',
    subs: [{
      code: '661',
      nom: 'Salaires & appointements'
    }, {
      code: '663',
      nom: 'Commissions au personnel'
    }, {
      code: '664',
      nom: 'Charges sociales (CNSS)'
    }]
  }, {
    code: '65',
    nom: 'Autres charges',
    couleur: '#7B82AD',
    subs: [{
      code: '658',
      nom: 'Charges diverses de gestion'
    }, {
      code: '659',
      nom: 'Dons & mécénat (Le Couronnement)'
    }]
  }];
  // Dépenses du mois (juin 2026)
  let expenses = [{
    id: 'D-3201',
    date: '2026-06-03',
    cat: '62',
    sub: '622',
    label: 'Loyer salon-atelier · juin',
    amount: 350000,
    method: 'virement'
  }, {
    id: 'D-3202',
    date: '2026-06-04',
    cat: '60',
    sub: '601',
    label: 'Réappro huiles, karité & plantes',
    amount: 168000,
    method: 'momo'
  }, {
    id: 'D-3203',
    date: '2026-06-06',
    cat: '66',
    sub: '661',
    label: 'Salaires équipe · juin',
    amount: 705000,
    method: 'momo'
  }, {
    id: 'D-3204',
    date: '2026-06-08',
    cat: '63',
    sub: '633',
    label: 'Publicité Meta + Google Ads',
    amount: 90000,
    method: 'card'
  }, {
    id: 'D-3205',
    date: '2026-06-10',
    cat: '60',
    sub: '6055',
    label: 'Aiguilles, peignes, capes',
    amount: 42000,
    method: 'cash'
  }, {
    id: 'D-3206',
    date: '2026-06-12',
    cat: '63',
    sub: '631',
    label: 'Commissions Mobile Money & KkiaPay',
    amount: 38000,
    method: 'momo'
  }, {
    id: 'D-3207',
    date: '2026-06-14',
    cat: '62',
    sub: '624',
    label: 'Entretien climatisation & plomberie',
    amount: 55000,
    method: 'cash'
  }, {
    id: 'D-3208',
    date: '2026-06-15',
    cat: '63',
    sub: '638',
    label: 'Internet fibre + abonnement LOKAA',
    amount: 65000,
    method: 'momo'
  }, {
    id: 'D-3209',
    date: '2026-06-18',
    cat: '61',
    sub: '611',
    label: 'Livraison commande fournisseur',
    amount: 18000,
    method: 'cash'
  }, {
    id: 'D-3210',
    date: '2026-06-20',
    cat: '64',
    sub: '646',
    label: 'Patente & droits municipaux',
    amount: 47000,
    method: 'virement'
  }, {
    id: 'D-3211',
    date: '2026-06-22',
    cat: '66',
    sub: '664',
    label: 'Charges sociales CNSS',
    amount: 120000,
    method: 'virement'
  }, {
    id: 'D-3212',
    date: '2026-06-24',
    cat: '62',
    sub: '625',
    label: 'Assurance local & responsabilité',
    amount: 36000,
    method: 'virement'
  }, {
    id: 'D-3213',
    date: '2026-06-25',
    cat: '65',
    sub: '659',
    label: 'Préparation édition Le Couronnement',
    amount: 60000,
    method: 'momo'
  }];
  const expListeners = [];
  let expSeq = 3214;
  const getExpenses = () => expenses;
  const addExpense = e => {
    expenses = [{
      id: 'D-' + expSeq++,
      date: '2026-06-26',
      ...e
    }, ...expenses];
    expListeners.forEach(f => f(expenses));
  };
  const onExpenses = f => {
    expListeners.push(f);
    return () => {
      const i = expListeners.indexOf(f);
      if (i >= 0) expListeners.splice(i, 1);
    };
  };
  const catByCode = c => expenseCats.find(x => x.code === c);
  const subByCode = (c, s) => (catByCode(c)?.subs || []).find(x => x.code === s);

  // ---- Plan comptable SYSCOHADA révisé · les 8 classes (référentiel complet) ----
  const SYSCOHADA_PLAN = [{
    cls: '1',
    nom: 'Ressources durables',
    type: 'Bilan · Passif',
    couleur: '#1E2150',
    desc: 'Capitaux propres & dettes financières',
    comptes: [{
      code: '10',
      nom: 'Capital'
    }, {
      code: '11',
      nom: 'Réserves'
    }, {
      code: '12',
      nom: 'Report à nouveau'
    }, {
      code: '13',
      nom: 'Résultat net de l’exercice'
    }, {
      code: '14',
      nom: 'Subventions d’investissement'
    }, {
      code: '16',
      nom: 'Emprunts & dettes assimilées'
    }, {
      code: '18',
      nom: 'Comptes de liaison des établissements'
    }]
  }, {
    cls: '2',
    nom: 'Actif immobilisé',
    type: 'Bilan · Actif',
    couleur: '#2C3470',
    desc: 'Immobilisations incorporelles, corporelles, financières',
    comptes: [{
      code: '21',
      nom: 'Immobilisations incorporelles (logiciels, marque)'
    }, {
      code: '22',
      nom: 'Terrains'
    }, {
      code: '23',
      nom: 'Bâtiments, agencements (salon-atelier)'
    }, {
      code: '24',
      nom: 'Matériel & mobilier (fauteuils, équipement)'
    }, {
      code: '25',
      nom: 'Avances sur immobilisations'
    }, {
      code: '27',
      nom: 'Immobilisations financières (dépôts, cautions)'
    }, {
      code: '28',
      nom: 'Amortissements'
    }]
  }, {
    cls: '3',
    nom: 'Stocks',
    type: 'Bilan · Actif',
    couleur: '#B97A4A',
    desc: 'Marchandises, matières & produits',
    comptes: [{
      code: '31',
      nom: 'Marchandises (gamme revente)'
    }, {
      code: '32',
      nom: 'Matières premières (huiles, plantes, beurres)'
    }, {
      code: '33',
      nom: 'Autres approvisionnements (consommables salon)'
    }, {
      code: '35',
      nom: 'Produits en cours'
    }, {
      code: '36',
      nom: 'Produits finis'
    }, {
      code: '38',
      nom: 'Stocks en cours de route'
    }]
  }, {
    cls: '4',
    nom: 'Tiers',
    type: 'Bilan · Actif/Passif',
    couleur: '#9E6238',
    desc: 'Clients, fournisseurs, personnel, État',
    comptes: [{
      code: '40',
      nom: 'Fournisseurs & comptes rattachés'
    }, {
      code: '41',
      nom: 'Clients & comptes rattachés'
    }, {
      code: '42',
      nom: 'Personnel'
    }, {
      code: '43',
      nom: 'Organismes sociaux (CNSS)'
    }, {
      code: '44',
      nom: 'État & collectivités (TVA, impôts)'
    }, {
      code: '45',
      nom: 'Organismes internationaux'
    }, {
      code: '47',
      nom: 'Débiteurs & créditeurs divers'
    }, {
      code: '48',
      nom: 'Créances & dettes hors activité (HAO)'
    }]
  }, {
    cls: '5',
    nom: 'Trésorerie',
    type: 'Bilan · Actif/Passif',
    couleur: '#4E5790',
    desc: 'Banques, mobile money, caisse',
    comptes: [{
      code: '52',
      nom: 'Banques (locales & diaspora)'
    }, {
      code: '53',
      nom: 'Établissements financiers (Mobile Money, KkiaPay)'
    }, {
      code: '54',
      nom: 'Instruments de trésorerie'
    }, {
      code: '57',
      nom: 'Caisse (espèces salon)'
    }, {
      code: '58',
      nom: 'Virements internes'
    }, {
      code: '59',
      nom: 'Dépréciations & provisions de trésorerie'
    }]
  }, {
    cls: '6',
    nom: 'Charges des activités ordinaires',
    type: 'Gestion · Charges',
    couleur: '#14141B',
    desc: 'Achats, services, personnel, impôts (détaillé ci-dessus)',
    comptes: [{
      code: '60',
      nom: 'Achats & variations de stocks'
    }, {
      code: '61',
      nom: 'Transports'
    }, {
      code: '62',
      nom: 'Services extérieurs A'
    }, {
      code: '63',
      nom: 'Services extérieurs B'
    }, {
      code: '64',
      nom: 'Impôts & taxes'
    }, {
      code: '65',
      nom: 'Autres charges'
    }, {
      code: '66',
      nom: 'Charges de personnel'
    }, {
      code: '67',
      nom: 'Frais financiers'
    }, {
      code: '68',
      nom: 'Dotations aux amortissements'
    }]
  }, {
    cls: '7',
    nom: 'Produits des activités ordinaires',
    type: 'Gestion · Produits',
    couleur: '#1B6B47',
    desc: 'Ventes de soins, de produits, autres produits',
    comptes: [{
      code: '70',
      nom: 'Ventes (prestations soins & installations)'
    }, {
      code: '71',
      nom: 'Subventions d’exploitation'
    }, {
      code: '72',
      nom: 'Production immobilisée'
    }, {
      code: '75',
      nom: 'Autres produits (formations Académie)'
    }, {
      code: '77',
      nom: 'Revenus financiers'
    }, {
      code: '78',
      nom: 'Transferts de charges'
    }]
  }, {
    cls: '8',
    nom: 'Autres charges & produits (HAO)',
    type: 'Gestion · Résultat',
    couleur: '#7B4A2E',
    desc: 'Hors activités ordinaires & comptes de résultat',
    comptes: [{
      code: '81',
      nom: 'Valeurs comptables des cessions d’immobilisations'
    }, {
      code: '82',
      nom: 'Produits des cessions d’immobilisations'
    }, {
      code: '83',
      nom: 'Charges hors activités ordinaires (HAO)'
    }, {
      code: '84',
      nom: 'Produits hors activités ordinaires (HAO)'
    }, {
      code: '85',
      nom: 'Dotations HAO'
    }, {
      code: '86',
      nom: 'Reprises HAO'
    }, {
      code: '88',
      nom: 'Subventions d’équilibre'
    }, {
      code: '89',
      nom: 'Impôts sur le résultat'
    }]
  }];

  // Revenus réels du mois (par flux) — cohérent avec finance.mois
  const revenueStreams = [{
    label: 'Soins en salon',
    amount: 1680000
  }, {
    label: 'Vente gamme & boutique',
    amount: 720000
  }, {
    label: 'Académie',
    amount: 320000
  }, {
    label: 'Événements',
    amount: 120000
  }];
  const totalRevenue = () => revenueStreams.reduce((s, r) => s + r.amount, 0);
  const totalExpenses = () => expenses.reduce((s, e) => s + e.amount, 0);
  const netResult = () => totalRevenue() - totalExpenses();

  // ---- Parrainage · fidélité · points suivis ----
  const loyaltyTiers = [{
    key: 'bronze',
    label: 'Couronne de bronze',
    min: 0,
    couleur: '#9E6238',
    avantages: ['Suivi rituel & rappels', 'Carte de membre']
  }, {
    key: 'argent',
    label: 'Couronne d’argent',
    min: 600,
    couleur: '#A0A0A8',
    avantages: ['+ 1 soin offert / an', 'Accès au Couronnement', 'Brume offerte à l’anniversaire']
  }, {
    key: 'or',
    label: 'Couronne d’or',
    min: 1500,
    couleur: '#B97A4A',
    avantages: ['+ Créneau prioritaire', 'Coffret anniversaire', '−10% sur la gamme', 'Invitations VIP']
  }];
  const pointsRules = [{
    action: '1 000 F dépensés en soin',
    pts: 10
  }, {
    action: '1 000 F dépensés en gamme',
    pts: 8
  }, {
    action: 'Parrainage validé',
    pts: 150
  }, {
    action: 'Avis Google publié',
    pts: 50
  }, {
    action: 'Anniversaire',
    pts: 30
  }];
  const referrals = [{
    id: 'r1',
    parrain: 'Naïma T.',
    code: 'NAIMA-MND',
    filleuls: 6,
    valides: 5,
    enAttente: 1,
    ptsGagnes: 750,
    recompense: '5 soins offerts cumulés'
  }, {
    id: 'r2',
    parrain: 'Adjoa K.',
    code: 'ADJOA-MND',
    filleuls: 3,
    valides: 3,
    enAttente: 0,
    ptsGagnes: 450,
    recompense: '1 coffret rituel'
  }, {
    id: 'r3',
    parrain: 'Fatou B.',
    code: 'FATOU-MND',
    filleuls: 2,
    valides: 1,
    enAttente: 1,
    ptsGagnes: 150,
    recompense: 'Brume offerte'
  }, {
    id: 'r4',
    parrain: 'Koffi M.',
    code: 'KOFFI-MND',
    filleuls: 1,
    valides: 0,
    enAttente: 1,
    ptsGagnes: 0,
    recompense: '—'
  }];
  const referralReward = {
    parrain: '150 pts + 1 soin offert',
    filleul: '−20% sur le 1er rendez-vous'
  };
  const pointsLedger = [{
    client: 'Naïma T.',
    motif: 'Parrainage validé · Awa S.',
    pts: 150,
    t: 'Il y a 2 j',
    sign: 1
  }, {
    client: 'Adjoa K.',
    motif: 'Soin profond rituel',
    pts: 18,
    t: 'Il y a 3 j',
    sign: 1
  }, {
    client: 'Fatou B.',
    motif: 'Échange · Brume offerte',
    pts: -120,
    t: 'Il y a 5 j',
    sign: -1
  }, {
    client: 'Naïma T.',
    motif: 'Avis Google publié',
    pts: 50,
    t: 'Il y a 1 sem',
    sign: 1
  }];

  // ---- Forfaits & abonnements MND (services récurrents) ----
  const subscriptionPlans = [{
    id: 'sub-entretien',
    nom: 'Abonnement Entretien',
    cadence: 'Mensuel',
    prix: 30000,
    economie: '−15%',
    populaire: false,
    inclus: ['1 resserrage / mois', 'Brume Traditionnelle offerte', 'Rappels automatiques'],
    couleur: 'indigo',
    lignes: [{
      kind: 'svc',
      nom: 'Resserrage microlocks',
      qte: 1
    }, {
      kind: 'prod',
      nom: 'Brume Traditionnelle',
      qte: 1
    }]
  }, {
    id: 'sub-couronne',
    nom: 'Abonnement Couronne',
    cadence: 'Mensuel',
    prix: 55000,
    economie: '−20%',
    populaire: true,
    inclus: ['1 resserrage + 1 soin profond / mois', 'Huile Couronne offerte', 'Créneau prioritaire', 'Points × 2'],
    couleur: 'copper',
    lignes: [{
      kind: 'svc',
      nom: 'Resserrage microlocks',
      qte: 1
    }, {
      kind: 'svc',
      nom: 'Soin profond rituel',
      qte: 1
    }, {
      kind: 'prod',
      nom: 'Huile Couronne',
      qte: 1
    }]
  }, {
    id: 'sub-prestige',
    nom: 'Abonnement Prestige',
    cadence: 'Trimestriel',
    prix: 180000,
    economie: '−25%',
    populaire: false,
    inclus: ['Entretien illimité', 'Coffret gamme trimestriel', 'Consultation premium incluse', 'Invitation Le Couronnement'],
    couleur: 'obsidian',
    lignes: [{
      kind: 'svc',
      nom: 'Resserrage microlocks',
      qte: 3
    }, {
      kind: 'svc',
      nom: 'Consultation premium',
      qte: 1
    }, {
      kind: 'prod',
      nom: 'Huile Couronne',
      qte: 1
    }, {
      kind: 'prod',
      nom: 'Beurre Locks',
      qte: 1
    }]
  }];
  // ---- Packs (carnets de services prépayés, décomptés à chaque RDV) ----
  // Distincts des memberships : un pack = N services à consommer, sans récurrence.
  let servicePacks = [{
    id: 'pack-resser10',
    nom: 'Carnet 10 Resserrages',
    prix: 300000,
    economie: '−15%',
    couleur: 'indigo',
    lignes: [{
      svc: 'Resserrage microlocks',
      total: 10
    }],
    desc: 'Dix resserrages prépayés, à consommer à votre rythme.'
  }, {
    id: 'pack-soin',
    nom: 'Carnet Soin Couronne',
    prix: 140000,
    economie: '−18%',
    couleur: 'copper',
    lignes: [{
      svc: 'Shampoing naturel',
      total: 12
    }, {
      svc: 'Soin profond rituel',
      total: 6
    }],
    desc: 'Douze shampoings + six soins profonds.'
  }, {
    id: 'pack-duo',
    nom: 'Carnet Duo Entretien',
    prix: 220000,
    economie: '−20%',
    couleur: 'obsidian',
    lignes: [{
      svc: 'Resserrage microlocks',
      total: 12
    }, {
      svc: 'Détox cuir chevelu',
      total: 6
    }],
    desc: 'Le carnet complet entretien + détox.'
  }];
  // Packs détenus par des clients, avec décompte du restant + historique RDV
  let clientPacks = [{
    id: 'cp1',
    client: 'Adjoa K.',
    pack: 'Carnet Soin Couronne',
    achat: '12 avr 2026',
    lignes: [{
      svc: 'Shampoing naturel',
      total: 12,
      used: 5
    }, {
      svc: 'Soin profond rituel',
      total: 6,
      used: 2
    }],
    history: [{
      date: '12 avr 2026',
      svc: 'Shampoing naturel',
      rdv: 'RDV #1841'
    }, {
      date: '28 avr 2026',
      svc: 'Soin profond rituel',
      rdv: 'RDV #1855'
    }, {
      date: '14 mai 2026',
      svc: 'Shampoing naturel',
      rdv: 'RDV #1872'
    }, {
      date: '02 juin 2026',
      svc: 'Shampoing naturel',
      rdv: 'RDV #1903'
    }]
  }, {
    id: 'cp2',
    client: 'Naïma T.',
    pack: 'Carnet 10 Resserrages',
    achat: '02 mai 2026',
    lignes: [{
      svc: 'Resserrage microlocks',
      total: 10,
      used: 7
    }],
    history: [{
      date: '02 mai 2026',
      svc: 'Resserrage microlocks',
      rdv: 'RDV #1860'
    }, {
      date: '20 mai 2026',
      svc: 'Resserrage microlocks',
      rdv: 'RDV #1888'
    }, {
      date: '08 juin 2026',
      svc: 'Resserrage microlocks',
      rdv: 'RDV #1912'
    }]
  }];
  const packListeners = [];
  const onPacks = f => {
    packListeners.push(f);
    return () => {
      const i = packListeners.indexOf(f);
      if (i >= 0) packListeners.splice(i, 1);
    };
  };
  const notifyPacks = () => packListeners.forEach(f => f());
  const packsOfClient = nom => clientPacks.filter(p => p.client === nom);
  // Carnet actif d'un client couvrant un service donné (restant > 0)
  const activePackForService = (nom, svcName) => clientPacks.find(cp => cp.client === nom && cp.lignes.some(l => l.svc === svcName && l.used < l.total));
  // Décompte automatique : consomme 1 unité du service depuis le carnet, journalise le RDV
  const redeemFromPack = (clientPackId, svcName, rdvLabel) => {
    let ok = false;
    clientPacks = clientPacks.map(cp => {
      if (cp.id !== clientPackId) return cp;
      const lignes = cp.lignes.map(l => {
        if (l.svc === svcName && l.used < l.total) {
          ok = true;
          return {
            ...l,
            used: l.used + 1
          };
        }
        return l;
      });
      const history = ok ? [{
        date: '26 juin 2026',
        svc: svcName,
        rdv: rdvLabel || 'RDV'
      }, ...(cp.history || [])] : cp.history || [];
      return {
        ...cp,
        lignes,
        history
      };
    });
    notifyPacks();
    return ok;
  };
  // Auto-décompte au moment de la prise de RDV : trouve le carnet et consomme
  const autoRedeemOnBooking = (clientNom, svcName, rdvLabel) => {
    const cp = activePackForService(clientNom, svcName);
    if (!cp) return null;
    redeemFromPack(cp.id, svcName, rdvLabel);
    return cp;
  };
  const assignPack = (clientNom, packId) => {
    const base = servicePacks.find(p => p.id === packId);
    if (!base) return;
    clientPacks = [{
      id: 'cp' + Date.now(),
      client: clientNom,
      pack: base.nom,
      achat: '26 juin 2026',
      lignes: base.lignes.map(l => ({
        ...l,
        used: 0
      })),
      history: []
    }, ...clientPacks];
    notifyPacks();
  };
  const addServicePack = p => {
    servicePacks = [{
      id: 'pack-' + Date.now(),
      economie: '',
      couleur: 'indigo',
      lignes: [],
      ...p
    }, ...servicePacks];
    notifyPacks();
  };
  const updateServicePack = (id, patch) => {
    servicePacks = servicePacks.map(p => p.id === id ? {
      ...p,
      ...patch
    } : p);
    notifyPacks();
  };
  const removeServicePack = id => {
    servicePacks = servicePacks.filter(p => p.id !== id);
    notifyPacks();
  };
  let activeSubs = [{
    id: 'as1',
    client: 'Adjoa K.',
    plan: 'Abonnement Couronne',
    depuis: 'Avr 2026',
    prochaine: '02 juil',
    statut: 'Actif'
  }, {
    id: 'as2',
    client: 'Naïma T.',
    plan: 'Abonnement Prestige',
    depuis: 'Jan 2026',
    prochaine: '15 juil',
    statut: 'Actif'
  }, {
    id: 'as3',
    client: 'Fatou B.',
    plan: 'Abonnement Entretien',
    depuis: 'Mai 2026',
    prochaine: '08 juil',
    statut: 'Actif'
  }, {
    id: 'as4',
    client: 'Koffi M.',
    plan: 'Abonnement Entretien',
    depuis: 'Juin 2026',
    prochaine: '28 juin',
    statut: 'Paiement dû'
  }];
  const subsOfClient = nom => activeSubs.filter(s => s.client === nom);
  const assignSub = (clientNom, planId) => {
    const base = cur().subscriptionPlans.find(p => p.id === planId);
    if (!base) return;
    activeSubs = [{
      id: 'as' + Date.now(),
      client: clientNom,
      plan: base.nom,
      depuis: 'Juin 2026',
      prochaine: '26 juil',
      statut: 'Actif'
    }, ...activeSubs];
    // Crée un compteur de consommation (services du cycle), décompté automatiquement à chaque RDV
    const svcLignes = (base.lignes || []).filter(l => l.kind === 'svc');
    if (svcLignes.length) {
      clientPacks = [{
        id: 'cp' + Date.now(),
        client: clientNom,
        pack: base.nom,
        kind: 'sub',
        achat: '26 juin 2026',
        lignes: svcLignes.map(l => ({
          svc: l.nom,
          total: l.qte,
          used: 0
        })),
        history: []
      }, ...clientPacks];
    }
    notifyPacks();
  };
  const cancelSub = id => {
    activeSubs = activeSubs.filter(s => s.id !== id);
    notifyPacks();
  };

  // ---- Vitrine client · merchandising back-office → front-office ----
  // Services ciblés par type de lock (ce que la cliente voit selon son profil)
  const lockTargeting = {
    'Microlocks': ['s-resser-micro', 's-soin', 's-detox', 's-consult'],
    'Locks fines': ['s-resser-fines', 's-soin', 's-detox', 's-consult'],
    'Locks moyennes': ['s-resser-fines', 's-soin', 's-detox', 's-consult'],
    'Nouveau · sans locks': ['s-nano', 's-micro', 's-fines', 's-consult']
  };
  let storefront = {
    featured: ['s-soin', 's-nano', 's-consult'],
    // services à la une (ordonnés)
    targeting: JSON.parse(JSON.stringify(lockTargeting)),
    subsOffered: ['sub-couronne', 'sub-entretien'],
    // abonnements proposés au front
    upsells: [{
      id: 'up1',
      nom: 'Brume Traditionnelle',
      prix: 12000,
      moment: 'apres',
      on: true,
      desc: 'Ajoutée après le soin · fraîcheur quotidienne.'
    }, {
      id: 'up2',
      nom: 'Scellage Huile Couronne',
      prix: 10000,
      moment: 'pendant',
      on: true,
      desc: 'Proposé pendant la réservation · brillance.'
    }, {
      id: 'up3',
      nom: 'Détox cuir chevelu express',
      prix: 8000,
      moment: 'pendant',
      on: false,
      desc: 'Add-on de 15 min avant le resserrage.'
    }, {
      id: 'up4',
      nom: 'Coffret découverte gamme',
      prix: 32000,
      moment: 'apres',
      on: true,
      desc: 'Suggéré à la fin · repartir avec le rituel.'
    }]
  };
  const sfListeners = [];
  const getStorefront = () => storefront;
  const setStorefront = patch => {
    storefront = {
      ...storefront,
      ...patch
    };
    sfListeners.forEach(f => f(storefront));
  };
  const onStorefront = f => {
    sfListeners.push(f);
    return () => {
      const i = sfListeners.indexOf(f);
      if (i >= 0) sfListeners.splice(i, 1);
    };
  };
  // Édition de service (reflétée en direct dans le front)
  const svcEditListeners = [];
  const saveService = (id, patch) => {
    const s = cur().services.find(x => x.id === id);
    if (s) Object.assign(s, patch);
    svcEditListeners.forEach(f => f(id));
    sfListeners.forEach(f => f(storefront));
    branchListeners.forEach(f => f());
  };
  const onServiceEdit = f => {
    svcEditListeners.push(f);
    return () => {
      const i = svcEditListeners.indexOf(f);
      if (i >= 0) svcEditListeners.splice(i, 1);
    };
  };
  // Type de lock front pour une cliente (depuis son passeport)
  const clientLockModel = c => {
    if (!c) return 'Nouveau · sans locks';
    const t = c.loc_type || '';
    if (/Micro/i.test(t)) return 'Microlocks';
    if (/fine|sister/i.test(t)) return 'Locks fines';
    if (/moyenne/i.test(t)) return 'Locks moyennes';
    return 'Nouveau · sans locks';
  };
  // Ce qu'une cliente voit, selon son type de lock + la curation back-office
  const clientStorefront = lockType => {
    const targeted = storefront.targeting[lockType] || storefront.targeting['Nouveau · sans locks'] || [];
    return {
      featured: storefront.featured.map(id => cur().services.find(s => s.id === id)).filter(Boolean),
      services: targeted.map(id => cur().services.find(s => s.id === id)).filter(Boolean),
      subs: storefront.subsOffered.map(id => cur().subscriptionPlans.find(p => p.id === id)).filter(Boolean),
      upsells: storefront.upsells.filter(u => u.on)
    };
  };

  // ---- Remises automatiques · adhésion / fidélité / parrainage ----
  // Remise auto appliquée selon le profil de la cliente (la plus avantageuse gagne)
  const memberDiscounts = [{
    key: 'or',
    label: 'Couronne d’or',
    type: 'tier',
    match: 'Couronne d’or',
    pct: 0.10,
    scope: 'tout'
  }, {
    key: 'argent',
    label: 'Couronne d’argent',
    type: 'tier',
    match: 'Couronne d’argent',
    pct: 0.05,
    scope: 'tout'
  }, {
    key: 'abo',
    label: 'Abonné·e actif',
    type: 'sub',
    pct: 0.10,
    scope: 'soins'
  }, {
    key: 'parrain',
    label: 'Parrain ambassadeur (3+ filleuls)',
    type: 'referral',
    minFilleuls: 3,
    pct: 0.08,
    scope: 'tout'
  }];
  // Quelle remise auto pour une cliente (cumul non, on garde la plus forte)
  const autoDiscountFor = clientNom => {
    const c = clients.find(x => x.nom === clientNom);
    const found = [];
    if (c) {
      const tierD = memberDiscounts.find(d => d.type === 'tier' && d.match === c.tier);
      if (tierD) found.push(tierD);
    }
    if (cur().activeSubs.some(s => s.client === clientNom && s.statut === 'Actif')) found.push(memberDiscounts.find(d => d.key === 'abo'));
    const ref = referrals.find(r => r.parrain === clientNom);
    if (ref && ref.valides >= 3) found.push(memberDiscounts.find(d => d.key === 'parrain'));
    if (!found.length) return null;
    return found.reduce((best, d) => d.pct > (best?.pct || 0) ? d : best, null);
  };
  const age = dob => {
    const d = new Date(dob),
      n = new Date('2026-06-26');
    let a = n.getFullYear() - d.getFullYear();
    if (n.getMonth() < d.getMonth() || n.getMonth() === d.getMonth() && n.getDate() < d.getDate()) a--;
    return a;
  };
  const avgAge = () => Math.round(clients.reduce((s, c) => s + age(c.dob), 0) / clients.length);
  const clientById = id => clients.find(c => c.id === id);
  // Per-branch isolation: only clients belonging to the active branch
  const curClients = () => clients.filter(c => (c.branch || 'cot') === activeBranchId);
  const svcById = id => cur().services.find(s => s.id === id);

  // Client store — mutable with listeners (array reference stays stable)
  const clientListeners = [];
  const onClients = f => {
    clientListeners.push(f);
    return () => {
      const i = clientListeners.indexOf(f);
      if (i >= 0) clientListeners.splice(i, 1);
    };
  };
  const notifyClients = () => clientListeners.forEach(f => f());
  const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  const ABBR = ['janv', 'févr', 'mars', 'avr', 'mai', 'juin', 'juil', 'août', 'sept', 'oct', 'nov', 'déc'];
  const frDate = iso => {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
  };
  const toISO = fr => {
    if (!fr) return '';
    const m = String(fr).match(/(\d{1,2})\s+([a-zéûôà]+)\s+(\d{4})/i);
    if (!m) return '';
    const mi = MONTHS.findIndex(x => x.startsWith(m[2].toLowerCase().slice(0, 3)));
    if (mi < 0) return '';
    return m[3] + '-' + String(mi + 1).padStart(2, '0') + '-' + String(m[1]).padStart(2, '0');
  };
  const annivOf = iso => {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.getDate() + ' ' + ABBR[d.getMonth()];
  };
  // Parse a French date string ("12 juin 2025", "14 déc 2024") → Date or null
  const parseFr = s => {
    if (!s) return null;
    const m = String(s).match(/(\d{1,2})\s+([a-zéûôàù]+)\.?\s+(\d{4})/i);
    if (!m) return null;
    const mo = m[2].toLowerCase();
    let mi = MONTHS.findIndex(x => x.startsWith(mo.slice(0, 3)));
    if (mi < 0) mi = ABBR.findIndex(x => x.startsWith(mo.slice(0, 3)));
    if (mi < 0) return null;
    return new Date(parseInt(m[3]), mi, parseInt(m[1]));
  };
  // Predicts the next likely visit from a client's last two visit dates (cadence).
  const predictNextVisit = clientId => {
    const c = clients.find(x => x.id === clientId);
    if (!c || !c.timeline) return null;
    const dates = c.timeline.map(t => parseFr(t.d)).filter(Boolean).sort((a, b) => a - b);
    if (dates.length < 2) return null;
    const last = dates[dates.length - 1],
      prev = dates[dates.length - 2];
    const gapDays = Math.round((last - prev) / 86400000);
    if (gapDays <= 0) return null;
    // average cadence over all intervals for a steadier estimate
    let totalGap = 0,
      n = 0;
    for (let i = 1; i < dates.length; i++) {
      totalGap += (dates[i] - dates[i - 1]) / 86400000;
      n++;
    }
    const avgGap = Math.round(totalGap / n);
    const predicted = new Date(last.getTime() + avgGap * 86400000);
    const today = new Date(2026, 5, 27);
    const overdueDays = Math.round((today - predicted) / 86400000);
    return {
      lastVisit: last,
      prevVisit: prev,
      lastGap: gapDays,
      avgGap,
      predicted,
      predictedFr: predicted.getDate() + ' ' + MONTHS[predicted.getMonth()] + ' ' + predicted.getFullYear(),
      overdue: overdueDays > 0,
      overdueDays: Math.abs(overdueDays),
      visits: dates.length
    };
  };
  const addClient = c => {
    const id = 'c' + Date.now();
    clients.push({
      id,
      branch: activeBranchId,
      photo: 'portrait-3.jpg',
      persona: 'initie',
      points: 0,
      tier: 'Couronne de bronze',
      depuis: frDate(new Date().toISOString()),
      visites: 0,
      ltv: 0,
      tags: [],
      pays: '',
      loc_size: '—',
      densite: '—',
      maturite: 'Starter',
      maturite_pct: 0.05,
      scalp: '—',
      allergies: 'Aucune',
      timeline: [],
      anniv: annivOf(c.dob),
      ...c
    });
    notifyClients();
    return id;
  };
  const updateClient = (id, patch) => {
    const c = clients.find(x => x.id === id);
    if (c) {
      Object.assign(c, patch);
      if (patch.dob) c.anniv = annivOf(patch.dob);
      notifyClients();
    }
  };
  const removeClient = id => {
    const i = clients.findIndex(x => x.id === id);
    if (i >= 0) {
      clients.splice(i, 1);
      notifyClients();
    }
  };
  // Geography — clients grouped by city / country
  const locations = () => {
    const byCity = {};
    curClients().forEach(c => {
      const key = (c.ville || '—') + '||' + (c.pays || '—');
      byCity[key] = byCity[key] || {
        ville: c.ville || '—',
        pays: c.pays || '—',
        count: 0,
        clients: []
      };
      byCity[key].count++;
      byCity[key].clients.push(c);
    });
    return Object.values(byCity).sort((a, b) => b.count - a.count);
  };
  const countriesCount = () => {
    const m = {};
    curClients().forEach(c => {
      const p = c.pays || '—';
      m[p] = (m[p] || 0) + 1;
    });
    return Object.entries(m).map(([pays, count]) => ({
      pays,
      count
    })).sort((a, b) => b.count - a.count);
  };
  // Geography nested: country → its cities → clients
  const byCountry = () => {
    const m = {};
    curClients().forEach(c => {
      const p = c.pays || '—',
        v = c.ville || '—';
      m[p] = m[p] || {
        pays: p,
        count: 0,
        villes: {}
      };
      m[p].count++;
      m[p].villes[v] = m[p].villes[v] || {
        ville: v,
        count: 0,
        clients: []
      };
      m[p].villes[v].count++;
      m[p].villes[v].clients.push(c);
    });
    return Object.values(m).map(co => ({
      ...co,
      villes: Object.values(co.villes).sort((a, b) => b.count - a.count)
    })).sort((a, b) => b.count - a.count);
  };
  const allTags = () => {
    const m = {};
    curClients().forEach(c => (c.tags || []).forEach(t => {
      m[t] = (m[t] || 0) + 1;
    }));
    return Object.entries(m).map(([tag, count]) => ({
      tag,
      count
    })).sort((a, b) => b.count - a.count);
  };

  // ---- Notes · clients & rendez-vous ----
  let notes = [{
    id: 'n1',
    scope: 'client',
    ref: 'c1',
    author: 'Yéman',
    date: '2026-06-12',
    pin: true,
    body: 'Cuir chevelu légèrement sec en ce moment — pousser la Brume Traditionnelle au quotidien. Préfère le silence pendant le soin.'
  }, {
    id: 'n2',
    scope: 'client',
    ref: 'c1',
    author: 'Brice',
    date: '2026-03-20',
    pin: false,
    body: 'A adoré la finition microlocks. Reviendra pour resserrage toutes les 5 semaines.'
  }, {
    id: 'n3',
    scope: 'client',
    ref: 'c2',
    author: 'Yéman',
    date: '2026-02-02',
    pin: true,
    body: 'Diaspora — ne vient qu’en visite. Toujours bloquer 2 créneaux rapprochés. Sensibilité parfum : produits neutres uniquement.'
  }, {
    id: 'n4',
    scope: 'appt',
    ref: 'a-cot-1',
    author: 'Yéman',
    date: '2026-06-26',
    pin: false,
    body: 'Prévoir reprise complète des racines, repousse importante. Photo avant/après à faire.'
  }];
  const noteListeners = [];
  let noteSeq = 100;
  const getNotes = (scope, ref) => notes.filter(n => n.scope === scope && n.ref === ref).sort((a, b) => b.pin - a.pin || (b.date < a.date ? -1 : 1));
  const allNotes = () => notes.slice().sort((a, b) => b.date < a.date ? 1 : -1);
  const saveNote = n => {
    if (n.id && notes.some(x => x.id === n.id)) notes = notes.map(x => x.id === n.id ? {
      ...x,
      ...n
    } : x);else notes = [{
      ...n,
      id: 'n' + noteSeq++,
      date: '2026-06-26',
      author: n.author || 'Yéman'
    }, ...notes];
    noteListeners.forEach(f => f());
  };
  const deleteNote = id => {
    notes = notes.filter(x => x.id !== id);
    noteListeners.forEach(f => f());
  };
  const onNotes = f => {
    noteListeners.push(f);
    return () => {
      const i = noteListeners.indexOf(f);
      if (i >= 0) noteListeners.splice(i, 1);
    };
  };

  // ---- Automations · moteur façon Zapier (déclencheur → actions) ----
  const AUTO_TRIGGERS = [{
    id: 'rdv_a_venir',
    label: 'RDV à venir',
    icon: '◷',
    desc: 'X heures avant un rendez-vous'
  }, {
    id: 'rdv_termine',
    label: 'RDV terminé',
    icon: '✓',
    desc: 'Quand un service est encaissé'
  }, {
    id: 'resserrage_du',
    label: 'Resserrage dû',
    icon: '⟳',
    desc: 'Cadence d’entretien dépassée'
  }, {
    id: 'anniversaire',
    label: 'Anniversaire client',
    icon: '✦',
    desc: 'Le jour de l’anniversaire'
  }, {
    id: 'no_show',
    label: 'No-show',
    icon: '⚠',
    desc: 'Client absent à un RDV'
  }, {
    id: 'stock_bas',
    label: 'Stock bas',
    icon: '⬡',
    desc: 'Produit sous le seuil'
  }, {
    id: 'client_inactif',
    label: 'Client inactif',
    icon: '◌',
    desc: 'Pas revenu depuis X semaines'
  }, {
    id: 'nouveau_client',
    label: 'Nouveau client',
    icon: '♛',
    desc: 'Première fiche créée'
  }, {
    id: 'palier_fidelite',
    label: 'Palier fidélité atteint',
    icon: '★',
    desc: 'Passage Couronne argent/or'
  }, {
    id: 'paiement_attente',
    label: 'Paiement en attente',
    icon: '▲',
    desc: 'Facture impayée après X jours'
  }, {
    id: 'avis_recu',
    label: 'Avis reçu',
    icon: '◉',
    desc: 'Nouvel avis Google/Facebook'
  }, {
    id: 'photo_due',
    label: 'Suivi photo dû',
    icon: '◐',
    desc: 'Jalon photo locks (2, 3, 6, 9 mois, 1 an)'
  }];
  const AUTO_ACTIONS = [{
    id: 'wa',
    label: 'Message WhatsApp',
    icon: '✆'
  }, {
    id: 'sms',
    label: 'SMS',
    icon: '✉'
  }, {
    id: 'email',
    label: 'Email',
    icon: '@'
  }, {
    id: 'notif',
    label: 'Notification staff',
    icon: '◉'
  }, {
    id: 'tache',
    label: 'Créer une tâche',
    icon: '◆'
  }, {
    id: 'tag',
    label: 'Ajouter un tag',
    icon: '⬩'
  }, {
    id: 'points',
    label: 'Créditer des points',
    icon: '★'
  }, {
    id: 'po',
    label: 'Bon de commande',
    icon: '⬡'
  }, {
    id: 'avis_link',
    label: 'Envoyer le lien d’avis Google',
    icon: '◉'
  }, {
    id: 'avis_reply',
    label: 'Répondre à l’avis',
    icon: '↩'
  }, {
    id: 'photo_task',
    label: 'Créer la tâche photo',
    icon: '◐'
  }];
  let automations = [{
    id: 'au1',
    on: true,
    trigger: 'rdv_a_venir',
    when: '48 h avant',
    actions: ['wa'],
    filter: 'Tous les RDV',
    desc: 'Rappel WhatsApp 48 h avant chaque rendez-vous',
    runs: 312,
    lastRun: 'il y a 2 h'
  }, {
    id: 'au2',
    on: true,
    trigger: 'rdv_a_venir',
    when: '2 h avant',
    actions: ['sms'],
    filter: 'Tous les RDV',
    desc: 'SMS de rappel 2 h avant',
    runs: 298,
    lastRun: 'il y a 12 min'
  }, {
    id: 'au3',
    on: true,
    trigger: 'resserrage_du',
    when: 'Cadence +3 j',
    actions: ['wa', 'tache'],
    filter: 'Microlocks & fines',
    desc: 'Relance resserrage + tâche staff quand la cadence est dépassée',
    runs: 64,
    lastRun: 'hier'
  }, {
    id: 'au4',
    on: true,
    trigger: 'anniversaire',
    when: 'À 09 h',
    actions: ['wa', 'points'],
    filter: 'Toutes les clientes',
    desc: 'Vœux d’anniversaire + 50 points cadeau',
    runs: 22,
    lastRun: 'il y a 3 j'
  }, {
    id: 'au5',
    on: true,
    trigger: 'stock_bas',
    when: 'Immédiat',
    actions: ['notif', 'po'],
    filter: 'Tous produits',
    desc: 'Alerte stock + brouillon de bon de commande fournisseur',
    runs: 9,
    lastRun: 'il y a 5 j'
  }, {
    id: 'au6',
    on: false,
    trigger: 'client_inactif',
    when: '8 semaines',
    actions: ['wa', 'tag'],
    filter: 'Hors diaspora',
    desc: 'Relance « on prend soin de votre couronne ? » + tag À relancer',
    runs: 17,
    lastRun: 'il y a 2 sem'
  }, {
    id: 'au7',
    on: true,
    trigger: 'rdv_termine',
    when: 'Immédiat',
    actions: ['email'],
    filter: 'Tous les soins',
    desc: 'Envoi du guide post-soin personnalisé après chaque service',
    runs: 184,
    lastRun: 'il y a 1 h'
  }, {
    id: 'au8',
    on: false,
    trigger: 'no_show',
    when: 'Immédiat',
    actions: ['sms', 'tache'],
    filter: 'Tous les RDV',
    desc: 'SMS + tâche de rappel après une absence',
    runs: 6,
    lastRun: 'il y a 1 sem'
  }, {
    id: 'au9',
    on: true,
    trigger: 'avis_recu',
    when: 'Note ≥ 4',
    actions: ['notif'],
    filter: 'Google & Facebook',
    desc: 'Notifie l’équipe d’un nouvel avis positif à partager',
    runs: 41,
    lastRun: 'il y a 6 h'
  }, {
    id: 'au10',
    on: true,
    trigger: 'avis_recu',
    when: 'Immédiat',
    actions: ['avis_reply'],
    filter: 'Google',
    desc: 'Brouillon de réponse à chaque nouvel avis Google',
    runs: 28,
    lastRun: 'il y a 6 h'
  }, {
    id: 'au11',
    on: true,
    trigger: 'rdv_termine',
    when: 'Immédiat',
    actions: ['avis_link'],
    filter: 'Nouveau client',
    desc: 'Envoie le lien Google d’avis à tout nouveau client après sa 1ʳᵉ prestation',
    runs: 53,
    lastRun: 'il y a 40 min'
  }, {
    id: 'au12',
    on: true,
    trigger: 'photo_due',
    when: 'Au RDV',
    actions: ['photo_task', 'notif'],
    filter: 'Locks actives',
    desc: 'Crée la tâche photo de suivi (2, 3, 6, 9 mois, 1 an) au rendez-vous concerné',
    runs: 31,
    lastRun: 'il y a 2 j'
  }];
  const autoListeners = [];
  let autoSeq = 100;
  const getAutomations = () => automations;
  const saveAutomation = a => {
    if (a.id && automations.some(x => x.id === a.id)) automations = automations.map(x => x.id === a.id ? {
      ...x,
      ...a
    } : x);else automations = [{
      runs: 0,
      lastRun: '—',
      on: true,
      ...a,
      id: 'au' + autoSeq++
    }, ...automations];
    autoListeners.forEach(f => f());
  };
  const toggleAutomation = id => {
    automations = automations.map(x => x.id === id ? {
      ...x,
      on: !x.on
    } : x);
    autoListeners.forEach(f => f());
  };
  const deleteAutomation = id => {
    automations = automations.filter(x => x.id !== id);
    autoListeners.forEach(f => f());
  };
  const onAutomations = f => {
    autoListeners.push(f);
    return () => {
      const i = autoListeners.indexOf(f);
      if (i >= 0) autoListeners.splice(i, 1);
    };
  };
  const triggerById = id => AUTO_TRIGGERS.find(t => t.id === id);
  const actionById = id => AUTO_ACTIONS.find(a => a.id === id);

  // ===== Données par tenant : chaque (white-label × branche) est indépendant =====
  // services, produits, staff, marketing, modèles, fidélité, abonnements : propres à chaque compte.
  const PB_KEYS = ['services', 'products', 'staff', 'campaigns', 'templates', 'loyalty', 'loyaltyTiers', 'subscriptionPlans', 'activeSubs'];
  const _defaults = {
    services,
    products,
    staff,
    campaigns,
    templates,
    loyalty,
    loyaltyTiers,
    subscriptionPlans,
    activeSubs
  };
  const _stores = {};
  const _clone = x => JSON.parse(JSON.stringify(x));
  const tenantKey = () => (brand && brand.name || 'MND') + '|' + activeBranchId;
  const bstore = key => {
    if (!_stores[key]) {
      _stores[key] = {};
      PB_KEYS.forEach(k => {
        _stores[key][k] = _clone(_defaults[k]);
      });
    }
    return _stores[key];
  };
  const cur = () => bstore(tenantKey());
  const dataListeners = [];
  const onData = f => {
    dataListeners.push(f);
    return () => {
      const i = dataListeners.indexOf(f);
      if (i >= 0) dataListeners.splice(i, 1);
    };
  };
  const notifyData = () => {
    dataListeners.forEach(f => f());
    branchListeners.forEach(f => f());
  };
  const _add = (key, item, idp) => {
    const st = cur();
    const id = item.id || idp + Date.now();
    st[key] = [{
      ...item,
      id
    }, ...st[key]];
    notifyData();
    return id;
  };
  const _update = (key, id, patch) => {
    const st = cur();
    st[key] = st[key].map(x => x.id === id ? {
      ...x,
      ...patch
    } : x);
    notifyData();
  };
  const _remove = (key, id) => {
    const st = cur();
    st[key] = st[key].filter(x => x.id !== id);
    notifyData();
  };
  // Services & prix
  const addService = s => _add('services', {
    cat: 'Soin',
    prix: 0,
    duree: '1 h',
    sessions: 1,
    skill: 'Praticien',
    sop: false,
    profit: 0.5,
    ...s
  }, 's-');
  const updateService = (id, patch) => _update('services', id, patch);
  const removeService = id => _remove('services', id);
  // Produits & prix
  const addProduct = p => _add('products', {
    contenance: '—',
    prix: 0,
    cost: 0,
    stock: 0,
    seuil: 5,
    ...p
  }, 'p-');
  const updateProduct = (id, patch) => _update('products', id, patch);
  const removeProduct = id => _remove('products', id);
  // Staff
  const addStaff = s => _add('staff', {
    role: 'Praticien',
    photo: 'portrait-3.jpg',
    cert: 'Niveau I',
    base: 0,
    commPct: 0.1,
    commOn: true,
    login: '',
    loginRole: 'Praticien',
    actif: true,
    caMois: 0,
    rebook: 0,
    note: 5,
    present: true,
    conges: 0,
    ...s
  }, 'st-');
  const updateStaff = (id, patch) => _update('staff', id, patch);
  const removeStaff = id => _remove('staff', id);
  // Marketing · campagnes
  const addCampaign = c => _add('campaigns', {
    canal: 'WhatsApp',
    cible: 'Toutes',
    envoi: 0,
    ouvert: 0,
    statut: 'Brouillon',
    ...c
  }, 'cp-');
  const updateCampaign = (id, patch) => _update('campaigns', id, patch);
  const removeCampaign = id => _remove('campaigns', id);
  // Abonnements · memberships
  const addSubPlan = p => _add('subscriptionPlans', {
    cadence: 'Mensuel',
    prix: 0,
    economie: '',
    populaire: false,
    inclus: [],
    couleur: 'indigo',
    lignes: [],
    ...p
  }, 'sub-');
  const updateSubPlan = (id, patch) => _update('subscriptionPlans', id, patch);
  const removeSubPlan = id => _remove('subscriptionPlans', id);
  // Fidélité · paliers
  const addLoyaltyTier = t => _add('loyaltyTiers', {
    min: 0,
    couleur: '#9E6238',
    avantages: [],
    ...t
  }, 'lt-');
  const updateLoyaltyTier = (id, patch) => {
    const st = cur();
    st.loyaltyTiers = st.loyaltyTiers.map(x => x.id === id || x.key === id ? {
      ...x,
      ...patch
    } : x);
    notifyData();
  };
  const removeLoyaltyTier = id => {
    const st = cur();
    st.loyaltyTiers = st.loyaltyTiers.filter(x => x.id !== id && x.key !== id);
    notifyData();
  };

  // ---- Réordonner une collection (monter / descendre) ----
  const moveItem = (key, id, dir) => {
    const st = cur();
    const arr = st[key];
    if (!arr) return;
    const i = arr.findIndex(x => x.id === id || x.key === id);
    if (i < 0) return;
    const j = dir < 0 ? i - 1 : i + 1;
    if (j < 0 || j >= arr.length) return;
    const copy = arr.slice();
    const t = copy[i];
    copy[i] = copy[j];
    copy[j] = t;
    st[key] = copy;
    notifyData();
  };
  // ---- Grandes catégories de services (par tenant) ----
  const getServiceCategories = () => {
    const st = cur();
    if (!st.serviceCategories) st.serviceCategories = ['Installation', 'Entretien', 'Soin', 'Conseil', 'Coiffure'];
    return st.serviceCategories;
  };
  const addServiceCategory = name => {
    const st = cur();
    const cats = getServiceCategories();
    if (name && !cats.includes(name)) {
      st.serviceCategories = [...cats, name];
      notifyData();
    }
  };
  const renameServiceCategory = (oldN, newN) => {
    const st = cur();
    st.serviceCategories = getServiceCategories().map(c => c === oldN ? newN : c);
    st.services = st.services.map(s => s.cat === oldN ? {
      ...s,
      cat: newN
    } : s);
    notifyData();
  };
  const removeServiceCategory = name => {
    const st = cur();
    st.serviceCategories = getServiceCategories().filter(c => c !== name);
    notifyData();
  };
  const moveCategory = (name, dir) => {
    const st = cur();
    const cats = getServiceCategories();
    const i = cats.indexOf(name);
    const j = dir < 0 ? i - 1 : i + 1;
    if (i < 0 || j < 0 || j >= cats.length) return;
    const c = cats.slice();
    const t = c[i];
    c[i] = c[j];
    c[j] = t;
    st.serviceCategories = c;
    notifyData();
  };
  // ---- Catégories produits ----
  const getProductCategories = () => {
    const st = cur();
    if (!st.productCategories) st.productCategories = ['Soin', 'Coiffant', 'Accessoire'];
    return st.productCategories;
  };
  const addProductCategory = name => {
    const st = cur();
    const cats = getProductCategories();
    if (name && !cats.includes(name)) {
      st.productCategories = [...cats, name];
      notifyData();
    }
  };
  const api = {
    FCFA: money,
    money,
    moneyCompact,
    CURRENCIES,
    branches,
    activeBranch,
    setActiveBranch,
    onBranch,
    addBranch,
    updateBranch,
    removeBranch,
    setBranchCurrency,
    isoToday,
    clients,
    today,
    txns,
    onAppts,
    upcomingAppts,
    pastAppts,
    markApptDone,
    addAppt,
    addSessionSeries,
    sessionsOfGroup,
    consultations,
    consultsFull,
    CONSULT_TYPES,
    onInvoices,
    invStatut,
    addInvoice,
    updateInvoice,
    recordPayment,
    removeInvoice,
    removePayment,
    cancelAppt,
    removeAppt,
    removeClient,
    duplicateInvoice,
    unpaidInvoices,
    outstandingTotal,
    onWeek,
    moveAppt,
    updateWeekAppt,
    removeWeekAppt,
    duplicateAppt,
    getCash,
    addCash,
    onCash,
    finance,
    webAnalytics,
    getTemplates,
    saveTemplate,
    onTemplates,
    waConnected,
    waThreads,
    paymentProviders,
    expenseCats,
    SYSCOHADA_PLAN,
    getExpenses,
    addExpense,
    onExpenses,
    catByCode,
    subByCode,
    revenueStreams,
    totalRevenue,
    totalExpenses,
    netResult,
    pointsRules,
    referrals,
    referralReward,
    pointsLedger,
    lockTargeting,
    getStorefront,
    setStorefront,
    onStorefront,
    clientStorefront,
    saveService,
    onServiceEdit,
    clientLockModel,
    memberDiscounts,
    autoDiscountFor,
    age,
    avgAge,
    frDate,
    toISO,
    annivOf,
    predictNextVisit,
    addClient,
    updateClient,
    onClients,
    locations,
    countriesCount,
    byCountry,
    allTags,
    getNotes,
    allNotes,
    saveNote,
    deleteNote,
    onNotes,
    AUTO_TRIGGERS,
    AUTO_ACTIONS,
    getAutomations,
    saveAutomation,
    toggleAutomation,
    deleteAutomation,
    onAutomations,
    triggerById,
    actionById,
    getBrand,
    setBrand,
    registerBrand,
    updateBrandPreset,
    removeBrandPreset,
    onBrand,
    brandPresets,
    PLANS,
    FEATURE_LABELS,
    clientById,
    svcById,
    onData,
    tenantKey,
    addService,
    updateService,
    removeService,
    addProduct,
    updateProduct,
    removeProduct,
    addStaff,
    updateStaff,
    removeStaff,
    addCampaign,
    updateCampaign,
    removeCampaign,
    addSubPlan,
    updateSubPlan,
    removeSubPlan,
    addLoyaltyTier,
    updateLoyaltyTier,
    removeLoyaltyTier,
    moveItem,
    getServiceCategories,
    addServiceCategory,
    renameServiceCategory,
    removeServiceCategory,
    moveCategory,
    getProductCategories,
    addProductCategory,
    reviewLink,
    onReviews,
    replyReview,
    addReview,
    PHOTO_MILESTONES,
    photoSchedule,
    nextPhotoDue,
    markPhotoDone,
    onPacks,
    servicePacks,
    subscriptionPlans,
    packsOfClient,
    activePackForService,
    redeemFromPack,
    autoRedeemOnBooking,
    assignPack,
    addServicePack,
    updateServicePack,
    removeServicePack,
    subsOfClient,
    assignSub,
    cancelSub,
    CONSULT_TYPES,
    consultForms,
    onConsultForms,
    formByType,
    addConsultForm,
    updateConsultForm,
    removeConsultForm,
    addFormQuestion,
    updateFormQuestion,
    removeFormQuestion,
    moveFormQuestion
  };
  Object.defineProperties(api, {
    reviews: {
      enumerable: true,
      get: () => reviews
    },
    clients: {
      enumerable: true,
      get: () => curClients()
    },
    today: {
      enumerable: true,
      get: () => today.filter(a => (a.branch || 'cot') === activeBranchId)
    },
    invoices: {
      enumerable: true,
      get: () => invoices
    },
    week: {
      enumerable: true,
      get: () => week
    },
    services: {
      enumerable: true,
      get: () => cur().services
    },
    products: {
      enumerable: true,
      get: () => cur().products
    },
    staff: {
      enumerable: true,
      get: () => cur().staff
    },
    campaigns: {
      enumerable: true,
      get: () => cur().campaigns
    },
    loyalty: {
      enumerable: true,
      get: () => cur().loyalty
    },
    loyaltyTiers: {
      enumerable: true,
      get: () => cur().loyaltyTiers
    },
    subscriptionPlans: {
      enumerable: true,
      get: () => cur().subscriptionPlans
    },
    activeSubs: {
      enumerable: true,
      get: () => cur().activeSubs
    },
    servicePacks: {
      enumerable: true,
      get: () => servicePacks
    },
    clientPacks: {
      enumerable: true,
      get: () => clientPacks
    },
    catProducts: {
      enumerable: true,
      get: () => withProdDesc(cur().products)
    },
    catServices: {
      enumerable: true,
      get: () => withSvcDesc(cur().services)
    }
  });
  return api;
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lokaa/lokaa-data.js", error: String((e && e.message) || e) }); }

// ui_kits/quiz/personas.js
try { (() => {
/* MND — Personas canoniques · 15 profils clients
   Source unique partagée par le quiz, le CRM, l'app et le guide d'accueil.
   Chaque persona porte : description, style de communication,
   guide staff, stratégie de fidélisation, code couleur, photo. */

window.MND_PERSONAS = {
  /* ======== GROUPE A — Profils ancrés (Cotonou & Bénin) ======== */

  souveraine: {
    id: 'souveraine',
    groupe: 'A',
    nom: 'La Souveraine Locale',
    emoji: '♛',
    tagline: 'Ancrée, sûre d\'elle, exigeante en silence.',
    couleur: '#1E2150',
    photo: 'portrait-1.jpg',
    desc: 'Elle est de Cotonou. Elle connaît ses cheveux, elle sait ce qu\'elle veut, et elle a déjà été déçue ailleurs. Elle ne cherche pas à être convaincue — elle teste. Si vous réussissez, elle devient une ambassadrice.',
    comm: 'Parlez avec précision. Jamais de survente. Montrez le geste avant de l\'expliquer. Traitez-la en égale, pas en cliente à séduire.',
    staff: 'Accueillez sans effusion exagérée. Soyez direct·e sur le résultat attendu. Évitez les diminutifs. Proposez sans insister. Le silence après un geste réussi vaut plus que mille mots.',
    retention: 'La fidéliser par l\'excellence répétée. Mémorisez ses préférences, son prénom, son planning. Invitez-la en avant-première aux nouveautés. Son invitation au Couronnement doit arriver avant tout le monde.'
  },
  calme: {
    id: 'calme',
    groupe: 'A',
    nom: 'La Calme',
    emoji: '◌',
    tagline: 'Elle fait confiance. Ne l\'interrompez pas.',
    couleur: '#CDBBA9',
    photo: 'portrait-2.jpg',
    desc: 'Elle s\'installe, observe, sourit. Elle ne pose pas beaucoup de questions parce qu\'elle vous fait confiance d\'emblée. Elle ressent tout — le calme ou le stress de l\'équipe.',
    comm: 'Voix douce, rythme lent. Expliquez ce que vous faites au fil du geste, sans vous précipiter. Proposez de la musique ou du silence selon sa préférence. Ne remplissez pas les silences inutilement.',
    staff: 'C\'est le type de cliente qu\'on peut facilement négliger parce qu\'elle ne se plaint pas. Soyez attentif aux micro-signaux : un sourcil froncé, une respiration retenue. Vérifiez toujours à mi-chemin.',
    retention: 'Elle revient naturellement si l\'expérience a été apaisante. Envoyez-lui un message doux après le rendez-vous. Proposez un créneau fixe chaque mois — elle aime la régularité.'
  },
  exigeante: {
    id: 'exigeante',
    groupe: 'A',
    nom: 'L\'Exigeante',
    emoji: '◈',
    tagline: 'Elle voit tout. Même ce que vous croyez invisible.',
    couleur: '#1E2150',
    photo: 'model-microlocks.jpg',
    desc: 'Chaque mèche doit être parfaite. Elle regarde dans le miroir plusieurs fois, compare les deux côtés, remarque si une lock est légèrement plus grosse que sa voisine. Ce n\'est pas de la mauvaise foi — c\'est de l\'amour-propre.',
    comm: 'Ne vous défendez jamais. Dites "je vais corriger" et corrigez. Parlez en termes techniques — elle appréciera. Proposez un miroir en cours de soin. Nommez ce que vous faites à chaque étape.',
    staff: 'Prenez le temps. Ne regardez pas votre montre. Anticipez ses questions. Si vous voyez une imperfection, corrigez-la avant qu\'elle ne la voie. C\'est une cliente qui vous rend meilleur·e.',
    retention: 'Un résultat parfait + un suivi précis = fidélité absolue. Envoyez-lui un bilan photo avant/après. Proposez une fiche de suivi personnalisée. Elle deviendra votre meilleure recommandation professionnelle.'
  },
  negociatrice: {
    id: 'negociatrice',
    groupe: 'A',
    nom: 'La Négociatrice',
    emoji: '◎',
    tagline: 'Elle demandera toujours. Restez souverain·e.',
    couleur: '#B97A4A',
    photo: 'yeman-smile.jpg',
    desc: 'Elle arrive avec un budget en tête inférieur au tarif affiché. Elle va tester les limites avec bienveillance — "vous ne pouvez pas faire un geste ?" Elle ne cherche pas à profiter, elle teste la valeur que vous accordez à votre propre travail.',
    comm: 'Maintenez vos tarifs avec grâce. Ne vous justifiez pas — expliquez la valeur. "Notre tarif reflète 20 ans de savoir-faire, des formules naturelles maison et un suivi personnalisé." Proposez une option moins chère si elle existe, jamais une réduction.',
    staff: 'Ne cédez jamais sur le tarif sans contrepartie. Proposez: étaler le paiement, un service en moins, un créneau départ de semaine moins demandé. Rappellez que le prix est une marque de respect envers votre propre travail.',
    retention: 'Offrez de la valeur sans baisser les prix : un échantillon de produit, une invitation à un atelier, un guide post-soin personnalisé. Elle reviendra si elle sent qu\'elle reçoit plus que ce qu\'elle a payé.'
  },
  pressee: {
    id: 'pressee',
    groupe: 'A',
    nom: 'La Pressée',
    emoji: '◷',
    tagline: 'Elle a 45 minutes. Soyez prêt·e avant qu\'elle arrive.',
    couleur: '#2C3470',
    photo: 'portrait-3.jpg',
    desc: 'Elle a confirmé son rendez-vous le matin même. Elle arrive avec son téléphone à la main, répond à des messages pendant le soin. Ce n\'est pas de l\'impolitesse — sa vie est une course permanente.',
    comm: 'Efficacité et précision. Pas de bavardage superflu. Dites-lui exactement combien de temps durera le soin. Proposez un résumé par WhatsApp plutôt qu\'une longue conversation.',
    staff: 'Tout doit être prêt à son arrivée. Shampoing préparé, cape prête, créneau respecté à la minute. Si elle attend, informez-la immédiatement. Proposez toujours le prochain RDV avant qu\'elle parte.',
    retention: 'Confirmez le RDV suivant avant même qu\'elle quitte la chaise. Envoyez les rappels 48h et 2h avant. Un service impeccablement chronométré la transforme en cliente régulière malgré son agenda.'
  },
  /* ======== GROUPE B — Profils professionnels ======== */

  corporate: {
    id: 'corporate',
    groupe: 'B',
    nom: 'La Corporate',
    emoji: '◆',
    tagline: 'Elle investit. Elle attend un retour.',
    couleur: '#14141B',
    photo: 'brice-portrait.jpg',
    desc: 'Cadre, cheffe d\'entreprise, consultante. Ses locks sont une extension de son image professionnelle. Elle n\'a pas de temps à perdre mais ne lésine pas sur la qualité — à condition que ça soit visible.',
    comm: 'Langue professionnelle et factuelle. Parlez d\'investissement, pas de prix. Proposez des forfaits mensuels, des créneaux tôt le matin ou tard le soir. Envoyez une confirmation écrite. Soyez ponctuel·le au rendez-vous, sans exception.',
    staff: 'Elle jugera le salon comme elle juge ses prestataires. Hygiène irréprochable, tenue soignée, espace rangé. Proposez le Wi-Fi, une eau fraîche. Ne l\'obligez pas à faire la conversation. Respectez sa confidentialité.',
    retention: 'Un abonnement mensuel avec créneau prioritaire. Factures systématiques (elle déclare en charges). Newsletter mensuelle avec conseils pro soins. Invitation aux événements VIP du Couronnement.'
  },
  artiste: {
    id: 'artiste',
    groupe: 'B',
    nom: 'L\'Artiste',
    emoji: '✦',
    tagline: 'Elle veut quelque chose que personne d\'autre n\'a.',
    couleur: '#9E6238',
    photo: 'hero-poster.jpg',
    desc: 'Photographe, musicienne, créatrice de mode, actrice. Elle porte ses locks comme une œuvre d\'art. Elle est ouverte à l\'expérimentation — coloration végétale, styles sculptés, accessoires.',
    comm: 'Parlez création, pas technique. Montrez des références visuelles. Invitez-la à co-créer son look. Utilisez un vocabulaire esthétique — "sculpter", "révéler", "composer".',
    staff: 'Laissez place à la créativité encadrée. Proposez 2-3 options, laissez-la choisir. Prenez des photos du résultat (avec accord) pour les archives MND. Elle sera votre meilleure vitrine sur les réseaux.',
    retention: 'Collaborations créatives : invitez-la pour des shootings. Proposez-lui d\'être modèle pour le Couronnement. Elle ne revient pas par habitude — elle revient par envie. Renouvelez-vous pour elle.'
  },
  /* ======== GROUPE C — Profils relationnels ======== */

  diaspora: {
    id: 'diaspora',
    groupe: 'C',
    nom: 'La Diaspora Souveraine',
    emoji: '✈',
    tagline: 'Venue de loin. Chaque visite est un retour aux racines.',
    couleur: '#B97A4A',
    photo: 'yeman-smile.jpg',
    desc: 'Elle vit à Paris, Atlanta, Montréal. Elle revient une ou deux fois par an. Ses locks sont un fil identitaire. Elle pleure parfois quand elle retrouve le soin — c\'est du soulagement.',
    comm: 'Chaleureuse et culturellement ancrée. Parlez fon si elle le parle. Référencez Cotonou, le Bénin, la famille. Ne soyez pas "trop pro" — soyez humain·e. Elle a besoin de se sentir chez elle.',
    staff: 'Demandez comment s\'est passé son voyage. Donnez-lui du temps. Elle a peut-être d\'autres rendez-vous condensés — soyez flexible sur l\'horaire. Proposez le coffret voyage pour repartir avec ses produits.',
    retention: 'Restez en contact entre les visites : un message à Noël, en période de Tabaski. Envoyez les nouveautés par WhatsApp. Invitez-la à rejoindre la communauté Skool depuis l\'étranger. Prévenez-la des dates du Couronnement longtemps à l\'avance.'
  },
  sociale: {
    id: 'sociale',
    groupe: 'C',
    nom: 'La Sociale',
    emoji: '◉',
    tagline: 'Elle amène ses amies. Et ses amies amènent les leurs.',
    couleur: '#4E5790',
    photo: 'founders-couple.jpg',
    desc: 'Elle a découvert MND par bouche-à-oreille et elle a immédiatement parlé du salon à 5 personnes. Elle aime le collectif, les rendez-vous en duo, le sentiment d\'appartenir à quelque chose.',
    comm: 'Chaleureuse, inclusive. Parlez de la communauté MND — le cercle RACINES, la communauté Skool, Le Couronnement. Nommez les autres clientes qu\'elle a peut-être amenées. Elle aime savoir que "sa Maison" grandit.',
    staff: 'Favorisez les doubles rendez-vous si possible. Donnez-lui des cartes de parrainage. Remerciez-la explicitement pour chaque nouvelle cliente qu\'elle amène. Elle est votre meilleure ambassadrice.',
    retention: 'Programme de parrainage : chaque nouvelle cliente amenée = un soin offert. Accès prioritaire aux événements. Mentionnez-la dans les stories Instagram (avec accord). Elle s\'investit si vous l\'investissez.'
  },
  transmettrice: {
    id: 'transmettrice',
    groupe: 'C',
    nom: 'La Maman Transmettrice',
    emoji: '◑',
    tagline: 'Elle vient pour son enfant. Et observera chaque geste.',
    couleur: '#7B82AD',
    photo: 'portrait-2.jpg',
    desc: 'Elle transmet l\'identité, la fierté, le soin. Elle n\'a peut-être pas de locks elle-même — mais elle sait exactement ce qu\'elle veut pour son enfant. Elle est vigilante, protectrice, attentive.',
    comm: 'Parlez transmission, héritage, douceur. Incluez l\'enfant dans la conversation — demandez-lui son avis. Expliquez chaque geste à la maman. Soyez patient·e sur les questions — même les plus basiques.',
    staff: 'Douceur maximale. Ne brusquez jamais l\'enfant, même pour un geste technique. Proposez de la musique adaptée. Si l\'enfant pleure ou résiste, prenez une pause. La maman se souvient de tout.',
    retention: 'Carte famille : la maman est incluse dans le suivi de son enfant. Guide personnalisé pour les soins à domicile. Elle reviendra seule quand elle sera prête — c\'est souvent dans les 3 mois.'
  },
  /* ======== GROUPE D — Profils de confiance ======== */

  fidele: {
    id: 'fidele',
    groupe: 'D',
    nom: 'La Fidèle Ancienne',
    emoji: '★',
    tagline: 'Elle est là depuis le début. Traitez-la en royauté.',
    couleur: '#B97A4A',
    photo: 'portrait-1.jpg',
    desc: 'Elle vient depuis 5, 10, parfois 20 ans. Elle a vu le salon évoluer, elle connaît les fondateurs par leur prénom. Elle est une archive vivante de MND. Sa fidélité est inconditionnelle — mais fragile si elle se sent oubliée.',
    comm: 'Familière mais jamais familière sans respect. Utilisez son prénom dès l\'entrée. Rappellez des souvenirs communs. Demandez des nouvelles de sa famille. Elle aime être "vue" dans sa totalité.',
    staff: 'Ne la faites jamais attendre. Elle n\'attend pas que vous soyez prêt·e — c\'est vous qui devez l\'être. Mémorisez chaque détail de sa fiche client. Si vous avez un nouveau membre d\'équipe, présentez-le-lui formellement.',
    retention: 'Palier Couronne d\'or automatique. Invitations VIP en avant-première. Son anniversaire ne passe jamais inaperçu. Proposez-lui d\'être "marraine" des nouveaux membres de la communauté.'
  },
  sceptique: {
    id: 'sceptique',
    groupe: 'D',
    nom: 'La Sceptique',
    emoji: '◫',
    tagline: 'Elle a été déçue ailleurs. Prouvez-lui que c\'est différent ici.',
    couleur: '#45454F',
    photo: 'portrait-3.jpg',
    desc: 'Elle a payé cher pour un mauvais soin. Ses locks ont souffert. Elle revient avec méfiance, des questions précises, et un regard qui teste. Ce n\'est pas de l\'hostilité — c\'est de l\'auto-protection.',
    comm: 'Soyez transparent·e sur vos techniques. Montrez vos certifications, parlez de l\'Académie, expliquez pourquoi MND est différent. N\'attaquez jamais le salon précédent — restez concentré·e sur ce que VOUS apportez.',
    staff: 'La première impression est décisive. Montrez votre espace, vos produits, vos mains propres. Expliquez avant de toucher. Demandez-lui ce qu\'elle a vécu avant — et écoutez vraiment. Proposez une mini-consultation gratuite avant de commencer.',
    retention: 'Un bilan écrit après le premier soin. Photos avant/après. Un plan de réparation si ses locks sont abîmées. Elle est la cliente la plus reconnaissante si vous la reconquérez — et la plus fidèle.'
  },
  /* ======== GROUPE E — Profils en découverte ======== */

  initie: {
    id: 'initie',
    groupe: 'E',
    nom: 'L\'Initié·e Premier RDV',
    emoji: '◯',
    tagline: 'Ce moment définira tout. Soyez à la hauteur.',
    couleur: '#1E2150',
    photo: 'model-microlocks.jpg',
    desc: 'C\'est sa première fois. Elle a peut-être hésité des mois. Il y a de la peur, de l\'excitation, mille questions. Elle ne sait pas encore ce qu\'elle veut vraiment.',
    comm: 'Rassurez avant d\'informer. Parlez lentement. Demandez pourquoi elle veut des locks — écoutez la vraie réponse, pas la réponse de surface. Montrez des exemples visuels. Validez ses hésitations.',
    staff: 'Ce rendez-vous fonde toute la relation. Prenez 15 minutes de consultation au début, sans compter. Expliquez le processus, la durée, l\'entretien. Ne lui faites pas choisir trop vite. Si possible, c\'est Yéman ou Brice qui reçoit.',
    retention: 'Appel de suivi 48h après. Guide post-soin remis en main propre. Invitation à rejoindre la communauté. Elle a besoin d\'être rassurée après — le miroir chez elle peut être impitoyable.'
  },
  souverain: {
    id: 'souverain',
    groupe: 'E',
    nom: 'Le Souverain',
    emoji: '◇',
    tagline: 'Il choisit ses locks comme il choisit ses batailles.',
    couleur: '#14141B',
    photo: 'brice-portrait.jpg',
    desc: 'Professionnel, étudiant, artiste. Il a choisi ses locks comme une affirmation d\'identité. Il veut un soin impeccable, une expertise technique, être traité en égal — ni en client bizarre, ni en "exception".',
    comm: 'Parlez technique, résultat, précision. Pas de sur-explication ni de condescendance. Traitez-le exactement comme vous traiteriez une femme. Son confort est aussi important. Ne faites aucune remarque sur la masculinité et les locks.',
    staff: 'Questionnez moins, observez plus. Proposez le miroir régulièrement. Il ne dira peut-être pas s\'il est mécontent — regardez son langage corporel. Respect, efficacité, résultat.',
    retention: 'Il est rare et précieux. Sa recommandation à d\'autres hommes est un vecteur de croissance énorme. Créez une offre homme claire. Invitez-le au Couronnement — l\'ancrage culturel lui parle.'
  },
  jeune: {
    id: 'jeune',
    groupe: 'E',
    nom: 'La Jeune Couronne',
    emoji: '◌',
    tagline: 'Elle construit son identité. MND peut en faire partie.',
    couleur: '#4E5790',
    photo: 'model-microlocks.jpg',
    desc: '18-25 ans. Étudiante, jeune professionnelle. Elle découvre qui elle est à travers ses choix — dont ses locks. Elle suit MND sur Instagram, elle connaît les produits, elle arrive informée.',
    comm: 'Parlez son langage sans le singer. Reconnaissez sa connaissance — elle a fait ses recherches. Parlez de communauté, de croissance personnelle, de l\'Académie. Instagram, podcast RACINES, le Couronnement l\'intéressent.',
    staff: 'Elle peut avoir un budget limité — proposez des options sans la faire se sentir diminuée. Mentionnez les facilités de paiement naturellement. Elle sera fidèle si vous la faites se sentir bienvenue dans la communauté MND.',
    retention: 'Tarif étudiant si applicable. Accès à la communauté Skool. Proposez l\'Académie niveau I. Elle est votre futur pilier — dans 5 ans, elle sera La Souveraine Locale.'
  }
};

/* Mapping quiz → persona (scoring keys) */
window.MND_PERSONA_KEYS = Object.keys(window.MND_PERSONAS);
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/quiz/personas.js", error: String((e && e.message) || e) }); }

// ui_kits/social/Social.jsx
try { (() => {
/* MND — Social kit · gabarits souverains
   Templates authored at real export px, scaled down for the gallery. */

const {
  Seal,
  Stars,
  Filet
} = window.MNDDesignSystem_a962de;

/* Scaling wrapper — keeps a real-px canvas, shrinks it to `scale` for preview. */
function Frame({
  w,
  h,
  scale = 0.3,
  label,
  spec,
  children
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w * scale,
      height: h * scale,
      position: 'relative',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      height: h,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      position: 'absolute',
      top: 0,
      left: 0,
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden'
    }
  }, children)), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 12,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--color-indigo)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12,
      color: 'var(--ink-soft)'
    }
  }, spec)));
}

/* Helpers (real px scale ~ values are large) */
const eyebrowBig = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 500,
  letterSpacing: '0.3em',
  textTransform: 'uppercase'
};
const serifDisp = {
  fontFamily: 'var(--font-serif)',
  fontWeight: 300,
  lineHeight: 0.98,
  letterSpacing: '-0.01em'
};

/* ---- 1 · Post éditorial (1080×1350) ---- */
function PostEditorial() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1350,
    scale: 0.3,
    label: "Post \xE9ditorial",
    spec: "1080\xD71350 \xB7 Visuel + Parole"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'var(--color-obsidian)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/portrait-1.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 26%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(20,20,27,0.88) 0%, rgba(20,20,27,0.15) 55%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/monograms/mono-ivoire.png",
    alt: "",
    style: {
      position: 'absolute',
      top: 64,
      left: 64,
      width: 100,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 64,
      right: 64,
      bottom: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowBig,
      fontSize: 26,
      color: 'var(--color-copper)',
      marginBottom: 28
    }
  }, "mi ny\u0254\u0301 \u0256\u025Bkp\u025B"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...serifDisp,
      fontSize: 96,
      color: 'var(--color-ivoire)'
    }
  }, "la beaut\xE9 noire n'a rien \xE0 prouver."))));
}

/* ---- 2 · Story Annonce (1080×1920) ---- */
function StoryAnnonce() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    scale: 0.24,
    label: "Story \xB7 Annonce",
    spec: "1080\xD71920 \xB7 zone s\xFBre 14%"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'var(--color-indigo)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('../../assets/patterns/pattern-arcade.png')",
      backgroundSize: 320,
      opacity: 0.07
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 130,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    src: "../../assets/monograms/mono-copper.png",
    size: 150,
    tone: "obsidian",
    ring: "copper"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 110px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowBig,
      fontSize: 28,
      color: 'var(--color-copper)',
      marginBottom: 40
    }
  }, "Nouveau rituel"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...serifDisp,
      fontSize: 120,
      color: 'var(--color-ivoire)'
    }
  }, "Huile Couronne"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    variant: "copper",
    length: "160px"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 34,
      lineHeight: 1.5,
      color: 'var(--indigo-100)',
      marginTop: 48,
      maxWidth: 720
    }
  }, "De la racine \xE0 la pointe. Le soin qui scelle et sublime chaque lock.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 150,
      left: 0,
      right: 0,
      textAlign: 'center',
      ...eyebrowBig,
      fontSize: 26,
      color: 'var(--color-copper)'
    }
  }, "@maison.mnd")));
}

/* ---- 3 · Story Témoignage (1080×1920) ---- */
function StoryTemoignage() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1920,
    scale: 0.24,
    label: "Story \xB7 T\xE9moignage",
    spec: "1080\xD71920 \xB7 5 \xE9toiles cuivre"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'var(--color-indigo)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 120px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/monograms/mono-copper.png",
    alt: "",
    style: {
      position: 'absolute',
      top: 150,
      width: 96,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'scale(3.2)',
      marginBottom: 90
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    value: 5,
    size: 20,
    gap: 5
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: 76,
      lineHeight: 1.32,
      color: 'var(--color-ivoire)',
      margin: 0
    }
  }, "\xAB On m'a appris \xE0 porter mes locks comme une couronne. \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 70,
      ...eyebrowBig,
      fontSize: 28,
      color: 'var(--color-copper)'
    }
  }, "Yeman \xB7 Cotonou \xB7 3 ans")));
}

/* ---- 4 · Avant / Après (1080×1080) ---- */
function AvantApres() {
  return /*#__PURE__*/React.createElement(Frame, {
    w: 1080,
    h: 1080,
    scale: 0.3,
    label: "Avant / Apr\xE8s",
    spec: "1080\xD71080 \xB7 filet cuivre central"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      position: 'relative',
      background: 'var(--color-obsidian)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Half, {
    img: "../../assets/photos/portrait-3.jpg",
    tag: "Avant",
    pos: "center 22%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 4,
      background: 'var(--color-copper)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement(Half, {
    img: "../../assets/photos/portrait-2.jpg",
    tag: "Apr\xE8s",
    pos: "center 18%"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 56,
      left: 0,
      right: 0,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: 60,
      color: 'var(--color-ivoire)'
    }
  }, "La transformation")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 48,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    src: "../../assets/monograms/mono-copper.png",
    size: 104,
    tone: "obsidian",
    ring: "copper"
  }))));
}
function Half({
  img,
  tag,
  pos
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: pos
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(20,20,27,0.6), rgba(20,20,27,0) 40%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 150,
      left: 0,
      right: 0,
      textAlign: 'center',
      ...eyebrowBig,
      fontSize: 30,
      color: 'var(--color-ivoire)'
    }
  }, tag));
}
Object.assign(window, {
  Frame,
  PostEditorial,
  StoryAnnonce,
  StoryTemoignage,
  AvantApres
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Social.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Booking.jsx
try { (() => {
const {
  Button,
  Input,
  Eyebrow,
  Filet,
  Seal
} = window.MNDDesignSystem_a962de;

/* CTA band that invites booking */
function BookingBand({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "journal",
    className: "kit-section",
    style: {
      background: 'var(--color-obsidian)',
      color: 'var(--color-ivoire)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('../../assets/patterns/pattern-rosette.png')",
      backgroundSize: 180,
      opacity: 0.05
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-narrow",
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "center",
    color: "var(--color-copper)"
  }, "Le salon flagship \xB7 Cotonou"), /*#__PURE__*/React.createElement("h2", {
    className: "kit-display kit-lower",
    style: {
      fontSize: 'clamp(38px, 5vw, 72px)',
      margin: '22px 0 0'
    }
  }, "entrez dans le rituel."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.6,
      color: 'var(--indigo-100)',
      maxWidth: 480,
      margin: '24px auto 36px'
    }
  }, "Salon de soin \xB7 Boutique \xB7 Atelier locks. R\xE9servez votre rendez-vous et laissez la Maison couronner votre t\xEAte."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "copper",
    onClick: onBook
  }, "Prendre rendez-vous")));
}

/* Modal booking form, interactive */
function BookingModal({
  open,
  onClose
}) {
  const [step, setStep] = React.useState('form');
  const [service, setService] = React.useState('Salon de soin');
  React.useEffect(() => {
    if (open) setStep('form');
  }, [open]);
  if (!open) return null;
  const services = ['Salon de soin', 'Atelier locks', 'Diagnostic'];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(12,13,32,0.62)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(520px, 94vw)',
      background: 'var(--color-ivoire)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-xl)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 2,
      background: 'var(--color-copper)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      position: 'absolute',
      top: 18,
      right: 18,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--ink-soft)',
      lineHeight: 1
    }
  }, "\u2715"), step === 'form' ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 40px 36px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Prendre rendez-vous"), /*#__PURE__*/React.createElement("h3", {
    className: "kit-serif kit-lower",
    style: {
      fontSize: 32,
      color: 'var(--color-indigo)',
      margin: '12px 0 4px'
    }
  }, "Votre rituel"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 13.5,
      color: 'var(--ink-soft)',
      margin: '0 0 26px'
    }
  }, "Trois gestes, une m\xEAme couronne. Choisissez votre service."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 26,
      flexWrap: 'wrap'
    }
  }, services.map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setService(s),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '9px 14px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      border: '1px solid ' + (service === s ? 'var(--color-indigo)' : 'var(--hairline)'),
      background: service === s ? 'var(--color-indigo)' : 'transparent',
      color: service === s ? 'var(--color-ivoire)' : 'var(--ink-soft)',
      transition: 'all var(--dur-base) var(--ease-soft)'
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "bk-nom",
    label: "Nom",
    placeholder: "Votre nom"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "bk-tel",
    label: "T\xE9l\xE9phone",
    type: "tel",
    placeholder: "+229 \u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    variant: "primary",
    onClick: () => setStep('done')
  }, "Confirmer la demande"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '52px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    src: "../../assets/monograms/mono-copper.png",
    size: 92,
    tone: "indigo",
    ring: "copper"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "kit-serif kit-lower",
    style: {
      fontSize: 30,
      color: 'var(--color-indigo)',
      margin: '0 0 12px'
    }
  }, "Demande re\xE7ue."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--ink-soft)',
      maxWidth: 340,
      margin: '0 auto 28px'
    }
  }, "La Maison vous recontacte sous peu pour fixer votre rituel \xAB ", service, " \xBB. \xC0 tr\xE8s bient\xF4t, t\xEAte couronn\xE9e."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    ornament: true,
    length: "120px"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Fermer"))));
}
Object.assign(window, {
  BookingBand,
  BookingModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Boutique.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Filet,
  Badge,
  Input,
  Card,
  Seal
} = window.MNDDesignSystem_a962de;
const FCFA = window.MND.FCFA;

/* Maison WhatsApp order line — composes the cart into a wa.me message. */
const MND_WA = '2290196756062'; // +229 01 96 75 60 62
function waOrderLink(lines, extra) {
  const products = window.MND.products;
  const det = lines.map(l => ({
    ...l,
    p: products.find(x => x.id === l.id)
  })).filter(l => l.p);
  const total = det.reduce((s, l) => s + l.p.prix * l.qty, 0);
  let msg = 'Bonjour Maison MND 👑\nJe souhaite commander :\n';
  det.forEach(l => {
    msg += `• ${l.qty} × ${l.p.nom} (${l.p.contenance}) — ${FCFA(l.p.prix * l.qty)}\n`;
  });
  msg += `\nTotal : ${FCFA(total)}`;
  if (extra) msg += `\n${extra}`;
  msg += '\n\nmi nyɔ́ ɖɛkpɛ';
  return `https://wa.me/${MND_WA}?text=${encodeURIComponent(msg)}`;
}

/* ---- Boutique header with cart ---- */
function ShopHeader({
  count,
  onCart
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(246,241,231,0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 78
    }
  }, /*#__PURE__*/React.createElement(window.Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "kit-nav-link",
    href: "index.html"
  }, "La Maison"), /*#__PURE__*/React.createElement("a", {
    className: "kit-nav-link",
    href: "boutique.html"
  }, "La Boutique"), /*#__PURE__*/React.createElement("a", {
    className: "kit-nav-link",
    href: "product.html"
  }, "Huile Couronne")), /*#__PURE__*/React.createElement("button", {
    onClick: onCart,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'none',
      border: '1px solid var(--color-indigo)',
      borderRadius: 'var(--radius-sm)',
      padding: '10px 18px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--color-indigo)'
    }
  }, "Panier", /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--color-copper)',
      color: 'var(--color-ivoire)',
      fontSize: 11,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 5px'
    }
  }, count))));
}

/* ---- Catalogue ---- */
function Catalogue({
  onAdd
}) {
  const products = window.MND.products;
  return /*#__PURE__*/React.createElement("section", {
    className: "kit-container",
    style: {
      padding: '48px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    withRule: true
  }, "La boutique \xB7 soins naturels"), /*#__PURE__*/React.createElement("h1", {
    className: "kit-display kit-lower",
    style: {
      fontSize: 'clamp(40px, 5vw, 68px)',
      color: 'var(--color-indigo)',
      margin: '18px 0 0'
    }
  }, "la mati\xE8re, sans compromis."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 16,
      lineHeight: 1.6,
      color: 'var(--ink-soft)',
      marginTop: 18
    }
  }, "Formules maison aux plantes d'Afrique \u2014 moringa, romarin, tea tree, karit\xE9, avocat. Sans silicone, sans paraben.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, products.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    padding: 0,
    hover: true,
    hairline: true,
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(window.ProductBottle, {
    tone: p.tone,
    tall: false
  }), p.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.badge === 'Signature' ? 'solid' : 'copper',
    size: "sm"
  }, p.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, p.type), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 24,
      color: 'var(--color-indigo)'
    }
  }, p.nom), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)',
      margin: '2px 0 14px'
    }
  }, p.actifs.join(' · ')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--hairline)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 20,
      color: 'var(--color-indigo)'
    }
  }, FCFA(p.prix)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: () => onAdd(p.id)
  }, "Ajouter")))))));
}

/* ---- Cart drawer ---- */
function QtyStepper({
  qty,
  onMinus,
  onPlus
}) {
  const b = {
    width: 34,
    height: 38,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    fontSize: 17,
    color: 'var(--color-indigo)',
    lineHeight: 1
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onMinus,
    style: b
  }, "\u2013"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 14
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: onPlus,
    style: b
  }, "+"));
}
function CartDrawer({
  open,
  lines,
  onClose,
  setQty,
  onCheckout
}) {
  const products = window.MND.products;
  const detailed = lines.map(l => ({
    ...l,
    p: products.find(x => x.id === l.id)
  })).filter(l => l.p);
  const subtotal = detailed.reduce((s, l) => s + l.p.prix * l.qty, 0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 900,
      background: 'rgba(12,13,32,0.5)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity var(--dur-base) var(--ease-soft)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: 'min(440px, 92vw)',
      zIndex: 1000,
      background: 'var(--color-ivoire)',
      boxShadow: 'var(--shadow-xl)',
      transform: open ? 'none' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-soft)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 28px',
      borderBottom: '1px solid var(--hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 26,
      color: 'var(--color-indigo)'
    }
  }, "Votre panier"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--ink-soft)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 28px'
    }
  }, detailed.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '64px 0',
      color: 'var(--ink-soft)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 300
    }
  }, "Votre panier est vide.") : detailed.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: 'flex',
      gap: 16,
      padding: '20px 0',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 80,
      flex: '0 0 auto',
      overflow: 'hidden',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(window.ProductBottle, {
    tone: l.p.tone,
    tall: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      color: 'var(--color-indigo)'
    }
  }, l.p.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      color: 'var(--ink-soft)',
      margin: '2px 0 10px'
    }
  }, l.p.contenance), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(QtyStepper, {
    qty: l.qty,
    onMinus: () => setQty(l.id, l.qty - 1),
    onPlus: () => setQty(l.id, l.qty + 1)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--color-indigo)'
    }
  }, FCFA(l.p.prix * l.qty))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 28px',
      borderTop: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Sous-total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 28,
      color: 'var(--color-indigo)'
    }
  }, FCFA(subtotal))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    variant: "primary",
    disabled: detailed.length === 0,
    onClick: onCheckout
  }, "Passer la commande"), /*#__PURE__*/React.createElement("a", {
    href: detailed.length ? waOrderLink(lines) : undefined,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      marginTop: 10,
      height: 48,
      borderRadius: 'var(--radius-sm)',
      textDecoration: 'none',
      border: '1px solid var(--color-indigo)',
      color: 'var(--color-indigo)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      opacity: detailed.length ? 1 : 0.4,
      pointerEvents: detailed.length ? 'auto' : 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"
  })), "Commander sur WhatsApp"))));
}

/* ---- Checkout overlay (stepper) ---- */
function Checkout({
  open,
  lines,
  onClose,
  onDone
}) {
  const [step, setStep] = React.useState(0);
  const products = window.MND.products;
  const detailed = lines.map(l => ({
    ...l,
    p: products.find(x => x.id === l.id)
  })).filter(l => l.p);
  const subtotal = detailed.reduce((s, l) => s + l.p.prix * l.qty, 0);
  const livraison = subtotal > 50000 ? 0 : 2000;
  const total = subtotal + livraison;
  React.useEffect(() => {
    if (open) setStep(0);
  }, [open]);
  if (!open) return null;
  const steps = ['Livraison', 'Paiement', 'Confirmation'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'var(--color-ivoire)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container",
    style: {
      padding: '32px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(window.Wordmark, null), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fermer",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: 20,
      color: 'var(--ink-soft)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 48,
      maxWidth: 560
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: i <= step ? 'var(--color-copper)' : 'var(--hairline)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: i <= step ? 'var(--color-indigo)' : 'var(--ink-soft)'
    }
  }, i + 1, ". ", s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "kit-serif kit-lower",
    style: {
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '0 0 28px'
    }
  }, "Livraison"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-prenom",
    label: "Pr\xE9nom",
    placeholder: "Adjoa"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-nom",
    label: "Nom",
    placeholder: "K."
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-tel",
    label: "T\xE9l\xE9phone",
    type: "tel",
    placeholder: "+229 \u2026"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "c-ville",
    label: "Ville",
    placeholder: "Cotonou"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-adr",
    label: "Quartier / adresse",
    placeholder: "Quartier, rep\xE8re\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => setStep(1)
  }, "Continuer vers le paiement"))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "kit-serif kit-lower",
    style: {
      fontSize: 34,
      color: 'var(--color-indigo)',
      margin: '0 0 28px'
    }
  }, "Paiement"), /*#__PURE__*/React.createElement(PayMethods, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    onClick: () => setStep(0)
  }, "Retour"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => setStep(2)
  }, "Confirmer la commande"))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    src: "../../assets/monograms/mono-copper.png",
    size: 96,
    tone: "indigo",
    ring: "copper"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "kit-serif kit-lower",
    style: {
      fontSize: 36,
      color: 'var(--color-indigo)',
      margin: '0 0 14px'
    }
  }, "Commande couronn\xE9e."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--ink-soft)',
      maxWidth: 420,
      margin: '0 auto 28px'
    }
  }, "Merci, t\xEAte couronn\xE9e. La Maison pr\xE9pare votre rituel et vous recontacte pour la livraison \xE0 Cotonou."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    ornament: true,
    length: "140px"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onDone
  }, "Retour \xE0 la boutique"))), step < 2 && /*#__PURE__*/React.createElement(Card, {
    surface: "sable",
    hairline: false,
    padding: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginBottom: 18
    }
  }, "R\xE9capitulatif"), detailed.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", null, l.qty, " \xD7 ", l.p.nom), /*#__PURE__*/React.createElement("span", null, FCFA(l.p.prix * l.qty)))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0'
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    variant: "indigo"
  })), /*#__PURE__*/React.createElement(Row, {
    k: "Sous-total",
    v: FCFA(subtotal)
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Livraison",
    v: livraison === 0 ? 'Offerte' : FCFA(livraison)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '14px 0'
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    variant: "copper"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 30,
      color: 'var(--color-indigo)'
    }
  }, FCFA(total)))))));
}
function Row({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '5px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)'
    }
  }, v));
}
function PayMethods() {
  const [m, setM] = React.useState('momo');
  const opts = [{
    id: 'whatsapp',
    label: 'Commande WhatsApp',
    sub: 'Confirmer & payer via WhatsApp'
  }, {
    id: 'momo',
    label: 'Mobile Money',
    sub: 'MTN · Moov'
  }, {
    id: 'cash',
    label: 'À la livraison',
    sub: 'Espèces à Cotonou'
  }, {
    id: 'card',
    label: 'Carte bancaire',
    sub: 'Visa · Mastercard'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    onClick: () => setM(o.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      textAlign: 'left',
      cursor: 'pointer',
      padding: '16px 18px',
      borderRadius: 'var(--radius-sm)',
      background: 'transparent',
      border: '1px solid ' + (m === o.id ? 'var(--color-copper)' : 'var(--hairline)')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '1px solid ' + (m === o.id ? 'var(--color-copper)' : 'var(--obsidian-300)'),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, m === o.id && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--color-copper)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--color-indigo)'
    }
  }, o.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 300,
      color: 'var(--ink-soft)'
    }
  }, o.sub)))));
}

/* ---- App ---- */
function BoutiqueApp() {
  const [lines, setLines] = React.useState([{
    id: 'huile-couronne',
    qty: 1
  }]);
  const [drawer, setDrawer] = React.useState(false);
  const [checkout, setCheckout] = React.useState(false);
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const add = id => {
    setLines(ls => {
      const ex = ls.find(l => l.id === id);
      if (ex) return ls.map(l => l.id === id ? {
        ...l,
        qty: l.qty + 1
      } : l);
      return [...ls, {
        id,
        qty: 1
      }];
    });
    setDrawer(true);
  };
  const setQty = (id, qty) => {
    setLines(ls => qty <= 0 ? ls.filter(l => l.id !== id) : ls.map(l => l.id === id ? {
      ...l,
      qty
    } : l));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-shell"
  }, /*#__PURE__*/React.createElement(ShopHeader, {
    count: count,
    onCart: () => setDrawer(true)
  }), /*#__PURE__*/React.createElement(Catalogue, {
    onAdd: add
  }), /*#__PURE__*/React.createElement(window.SiteFooter, {
    onBook: () => {
      window.location.hash = '#';
    }
  }), /*#__PURE__*/React.createElement(CartDrawer, {
    open: drawer,
    lines: lines,
    onClose: () => setDrawer(false),
    setQty: setQty,
    onCheckout: () => {
      setDrawer(false);
      setCheckout(true);
    }
  }), /*#__PURE__*/React.createElement(Checkout, {
    open: checkout,
    lines: lines,
    onClose: () => setCheckout(false),
    onDone: () => {
      setCheckout(false);
      setLines([]);
    }
  }));
}
Object.assign(window, {
  BoutiqueApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Boutique.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Chrome.jsx
try { (() => {
const {
  Button,
  Seal,
  Filet,
  Eyebrow,
  Input
} = window.MNDDesignSystem_a962de;
const NAV = [{
  label: 'Le Rituel',
  href: '#rituel'
}, {
  label: 'La Gamme',
  href: '#gamme'
}, {
  label: 'La Maison',
  href: '#maison'
}, {
  label: 'Journal',
  href: '#journal'
}];
function Wordmark({
  invert = false,
  mono = 'mono-indigo'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/monograms/${mono}.png`,
    alt: "",
    style: {
      width: 30,
      height: 30,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 22,
      letterSpacing: '0.3em',
      textIndent: '0.3em',
      color: invert ? 'var(--color-ivoire)' : 'var(--color-indigo)'
    }
  }, "MND"));
}
function SiteHeader({
  onBook
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('.kit-shell');
    const onScroll = () => setScrolled((el ? el.scrollTop : window.scrollY) > 24);
    const target = el || window;
    target.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => target.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(246, 241, 231, 0.86)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--hairline)' : '1px solid transparent',
      transition: 'background var(--dur-base) var(--ease-soft), border-color var(--dur-base) var(--ease-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 78
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 36
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.label,
    className: "kit-nav-link",
    href: n.href
  }, n.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: onBook
  }, "Prendre rendez-vous")));
}
function SiteFooter({
  onBook
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-obsidian)',
      color: 'var(--color-ivoire)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container",
    style: {
      padding: '72px 0 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    invert: true,
    mono: "mono-ivoire"
  }), /*#__PURE__*/React.createElement("p", {
    className: "kit-fon",
    style: {
      fontSize: 22,
      color: 'var(--indigo-200)',
      margin: '22px 0 0',
      maxWidth: 320
    }
  }, "mi ny\u0254\u0301 \u0256\u025Bkp\u025B \u2014 nous sommes beaux, et nous le savons.")), /*#__PURE__*/React.createElement(FooterCol, {
    title: "La Maison",
    items: ['Le Rituel', 'La Gamme', 'Le Salon', 'Journal']
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Contact",
    items: ['contact@mnd.bj', '@maison.mnd', 'Cotonou · Bénin']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '48px 0 28px'
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    color: "var(--hairline-invert)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--obsidian-200)'
    }
  }, "\xA9 2026 Maison MND \xB7 \xC9dition Souveraine"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "copper",
    onClick: onBook
  }, "R\xE9server un rituel"))));
}
function FooterCol({
  title,
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)',
      marginBottom: 18
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14,
      color: 'var(--indigo-200)'
    }
  }, i))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Hero.jsx
try { (() => {
const {
  Button,
  Eyebrow
} = window.MNDDesignSystem_a962de;
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-end',
      background: 'var(--color-obsidian)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/portrait-1.jpg",
    alt: "Portrait \u2014 Maison MND",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 28%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(20,20,27,0.82) 0%, rgba(20,20,27,0.30) 46%, rgba(20,20,27,0.45) 100%)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/monograms/mono-ivoire.png",
    alt: "",
    style: {
      position: 'absolute',
      top: 104,
      right: '6vw',
      width: 86,
      opacity: 0.16
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-container",
    style: {
      position: 'relative',
      paddingBottom: 'clamp(64px, 9vw, 120px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    withRule: true,
    color: "var(--color-copper)"
  }, "Maison MND \xB7 Cotonou \xB7 B\xE9nin"), /*#__PURE__*/React.createElement("h1", {
    className: "kit-display kit-lower",
    style: {
      fontSize: 'clamp(54px, 8vw, 116px)',
      color: 'var(--color-ivoire)',
      margin: '24px 0 0'
    }
  }, "la couronne", /*#__PURE__*/React.createElement("br", null), "se porte haut."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 'clamp(16px, 1.4vw, 19px)',
      lineHeight: 1.6,
      color: 'var(--indigo-100)',
      maxWidth: 520,
      margin: '28px 0 0'
    }
  }, "Le soin des locks comme acte de souverainet\xE9 culturelle. Un rituel d'exception, ancr\xE9 dans le savoir fon, port\xE9 par une exigence internationale."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "copper",
    onClick: onBook
  }, "Prendre rendez-vous"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => {
      window.location.hash = '#rituel';
    },
    style: {
      color: 'var(--color-ivoire)',
      borderColor: 'var(--hairline-invert)'
    }
  }, "D\xE9couvrir le rituel")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Maison.jsx
try { (() => {
const {
  Eyebrow,
  Filet,
  Stat,
  Stars,
  Card,
  Button,
  Badge
} = window.MNDDesignSystem_a962de;

/* ---- Manifeste : bande indigo, citation serif ---- */
function Manifeste() {
  return /*#__PURE__*/React.createElement("section", {
    id: "maison",
    style: {
      background: 'var(--color-indigo)',
      color: 'var(--color-ivoire)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-narrow",
    style: {
      padding: 'clamp(72px, 10vw, 128px) 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/monograms/mono-copper.png",
    alt: "",
    style: {
      width: 56,
      opacity: 0.9
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "kit-serif kit-lower",
    style: {
      fontSize: 'clamp(26px, 3.4vw, 46px)',
      lineHeight: 1.28,
      margin: 0
    }
  }, "Avant d'\xEAtre une coiffure, le lock est une lign\xE9e. Avant d'\xEAtre une marque,", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-copper)'
    }
  }, " MND est une couronne.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '40px 0 28px'
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    variant: "copper",
    length: "64px"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'clamp(28px, 5vw, 72px)',
      flexWrap: 'wrap'
    }
  }, ['Former', 'Soigner', 'Transmettre'].map(g => /*#__PURE__*/React.createElement("span", {
    key: g,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 13,
      letterSpacing: '0.26em',
      textTransform: 'uppercase',
      color: 'var(--indigo-100)'
    }
  }, g)))));
}

/* ---- Le Rituel : quatre gestes ---- */
const GESTES = [{
  n: '01',
  t: 'Purifier',
  d: 'Laver en douceur, libérer le cuir chevelu.'
}, {
  n: '02',
  t: 'Nourrir',
  d: 'Crème et huile, de la racine à la pointe.'
}, {
  n: '03',
  t: 'Sceller',
  d: 'Resserrer et protéger chaque lock.'
}, {
  n: '04',
  t: 'Couronner',
  d: 'Finir, sublimer, porter haut.'
}];
function LeRituel() {
  return /*#__PURE__*/React.createElement("section", {
    id: "rituel",
    className: "kit-section kit-arcade-ground",
    style: {
      background: 'var(--paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    withRule: true
  }, "Le rituel en quatre gestes"), /*#__PURE__*/React.createElement("h2", {
    className: "kit-display kit-lower",
    style: {
      fontSize: 'clamp(36px, 4.6vw, 62px)',
      color: 'var(--color-indigo)',
      margin: '20px 0 0'
    }
  }, "prendre soin comme on prend soin d'un h\xE9ritage.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, GESTES.map(g => /*#__PURE__*/React.createElement(Card, {
    key: g.n,
    topFilet: true,
    padding: 28,
    hover: true,
    style: {
      minHeight: 220,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 52,
      lineHeight: 1,
      color: 'var(--copper-200)'
    }
  }, g.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 26,
      color: 'var(--color-indigo)',
      marginBottom: 10
    }
  }, g.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--ink-soft)',
      margin: 0
    }
  }, g.d)))))));
}

/* ---- La Gamme : produits ---- */
const PRODUITS = window.MND.products;
function Bottle({
  tone
}) {
  const grounds = {
    indigo: 'linear-gradient(165deg, var(--indigo-600), var(--color-indigo-deep))',
    obsidian: 'linear-gradient(165deg, var(--obsidian-600), var(--color-obsidian))',
    sable: 'linear-gradient(165deg, var(--color-sable), var(--color-argile))'
  };
  const monoSrc = tone === 'sable' ? '../../assets/monograms/mono-indigo.png' : '../../assets/monograms/mono-copper.png';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 220,
      background: grounds[tone],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 150,
      borderRadius: '6px 6px 10px 10px',
      background: tone === 'sable' ? 'rgba(20,20,27,0.06)' : 'rgba(246,241,231,0.06)',
      border: tone === 'sable' ? '1px solid rgba(20,20,27,0.12)' : '1px solid rgba(246,241,231,0.12)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -12,
      width: 30,
      height: 16,
      background: 'var(--color-copper)',
      borderRadius: '3px'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: monoSrc,
    alt: "",
    style: {
      width: 32,
      opacity: 0.92
    }
  })));
}
function LaGamme() {
  return /*#__PURE__*/React.createElement("section", {
    id: "gamme",
    className: "kit-section",
    style: {
      background: 'var(--color-sable)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 24,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    withRule: true
  }, "La gamme de soin"), /*#__PURE__*/React.createElement("h2", {
    className: "kit-display kit-lower",
    style: {
      fontSize: 'clamp(36px, 4.6vw, 62px)',
      color: 'var(--color-indigo)',
      margin: '20px 0 0'
    }
  }, "l'objet comme rituel.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      window.location.href = 'boutique.html';
    }
  }, "Voir toute la gamme")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, PRODUITS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    padding: 0,
    hover: true,
    hairline: true,
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Bottle, {
    tone: p.tone
  }), p.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: p.badge === 'Signature' ? 'solid' : 'copper',
    size: "sm"
  }, p.badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, p.nom), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 24,
      color: 'var(--color-indigo)'
    }
  }, p.sous), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'var(--ink-soft)',
      margin: '2px 0 14px'
    }
  }, p.actifs.join(' · ')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid var(--hairline)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 18,
      color: 'var(--color-indigo)'
    }
  }, window.MND.FCFA(p.prix)), /*#__PURE__*/React.createElement("a", {
    className: "kit-nav-link",
    href: "boutique.html",
    style: {
      color: 'var(--color-indigo)'
    }
  }, "Ajouter"))))))));
}

/* ---- Témoignage ---- */
function Temoignage() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-indigo)',
      color: 'var(--color-ivoire)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container",
    style: {
      padding: 'clamp(64px, 9vw, 120px) 0',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'clamp(32px, 6vw, 88px)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/portrait-2.jpg",
    alt: "",
    style: {
      width: '100%',
      height: 460,
      objectFit: 'cover',
      objectPosition: 'center 20%',
      borderRadius: '50% 50% 4px 4px / 22% 22% 4px 4px'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Stars, {
    value: 5,
    size: 18
  }), /*#__PURE__*/React.createElement("p", {
    className: "kit-fon",
    style: {
      fontSize: 'clamp(24px, 3vw, 38px)',
      lineHeight: 1.3,
      margin: '24px 0 0'
    }
  }, "\xAB J'ai cess\xE9 de cacher mes locks. \xC0 la Maison, on m'a appris \xE0 les porter comme une couronne. \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontFamily: 'var(--font-sans)',
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-copper)'
    }
  }, "Yeman \xB7 Cotonou \xB7 3 ans de rituel"))));
}
Object.assign(window, {
  Manifeste,
  LeRituel,
  LaGamme,
  Temoignage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Maison.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ProductPage.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  Filet,
  Stars,
  Stat,
  Card,
  Badge,
  Seal
} = window.MNDDesignSystem_a962de;

/* Reuse the header/footer chrome from the marketing site */

function ProductBottle({
  tone = 'indigo',
  tall = true
}) {
  const grounds = {
    indigo: 'linear-gradient(160deg, var(--indigo-600) 0%, var(--color-indigo-deep) 100%)',
    obsidian: 'linear-gradient(160deg, var(--obsidian-600) 0%, var(--color-obsidian) 100%)',
    sable: 'linear-gradient(160deg, var(--color-sable) 0%, var(--color-argile) 100%)'
  };
  const glass = tone === 'sable' ? 'rgba(20,20,27,0.06)' : 'rgba(246,241,231,0.06)';
  const glassBorder = tone === 'sable' ? '1px solid rgba(20,20,27,0.12)' : '1px solid rgba(246,241,231,0.14)';
  const mono = tone === 'sable' ? '../../assets/monograms/mono-indigo.png' : '../../assets/monograms/mono-copper.png';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '4/5',
      background: grounds[tone],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('../../assets/patterns/pattern-arcade.png')",
      backgroundSize: 200,
      opacity: 0.05
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: tall ? 150 : 200,
      height: tall ? 380 : 280,
      borderRadius: tall ? '10px 10px 16px 16px' : '14px',
      background: glass,
      border: glassBorder,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(2px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -26,
      width: tall ? 64 : 110,
      height: 34,
      background: 'var(--color-copper)',
      borderRadius: '5px',
      boxShadow: 'var(--shadow-sm)'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: mono,
    alt: "",
    style: {
      width: 64,
      opacity: 0.95
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      letterSpacing: '0.3em',
      color: tone === 'sable' ? 'var(--color-indigo)' : 'var(--color-ivoire)',
      textIndent: '0.3em'
    }
  }, "MND")));
}
function ProductPage() {
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('rituel');
  const [added, setAdded] = React.useState(false);
  const tabs = {
    rituel: 'Le rituel',
    ingredients: 'La formule',
    conseil: 'Le conseil'
  };
  const tabContent = {
    rituel: 'Quelques gouttes dans la paume. Réchauffer, puis appliquer de la racine à la pointe, mèche après mèche. Sceller en pressant chaque lock. Couronner au quotidien, matin ou soir.',
    ingredients: 'Huile d’avocat (que la maison emploie largement), beurre de karité collecté aux quatre coins de l’Afrique, beurre de cacao. Sans silicone, sans paraben, sans parfum de synthèse. Une formule nue, comme un héritage qu’on ne dilue pas.',
    conseil: 'Pour les locks matures, deux à trois gestes par semaine suffisent. Sur cuir chevelu sensible, masser en cercles lents. Garder le flacon à l’abri de la lumière — le verre indigo protège la matière.'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "kit-shell"
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    onBook: () => {
      window.location.hash = '#';
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "kit-container",
    style: {
      padding: '28px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--ink-soft)'
    }
  }, "La Gamme ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-copper)'
    }
  }, "\xB7"), " Huile Couronne")), /*#__PURE__*/React.createElement("section", {
    className: "kit-container",
    style: {
      padding: '40px 0 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'clamp(40px, 6vw, 88px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 100
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    hairline: true,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ProductBottle, {
    tone: "indigo"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12,
      marginTop: 12
    }
  }, ['indigo', 'obsidian', 'sable'].map(t => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: 0,
    hairline: true,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ProductBottle, {
    tone: t,
    tall: false
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid",
    size: "sm"
  }, "Signature"), /*#__PURE__*/React.createElement("h1", {
    className: "kit-display kit-lower",
    style: {
      fontSize: 'clamp(46px, 5vw, 72px)',
      color: 'var(--color-indigo)',
      margin: '18px 0 0'
    }
  }, "Huile Couronne"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontWeight: 300,
      fontSize: 26,
      color: 'var(--color-copper)',
      marginTop: 8
    }
  }, "le soin racine \xB7 50 ml"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Stars, {
    value: 5,
    size: 17
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--ink-soft)'
    }
  }, "128 t\xEAtes couronn\xE9es")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.65,
      color: 'var(--ink)',
      margin: '28px 0 0',
      maxWidth: 480
    }
  }, "L'huile qui scelle et sublime. Huile d'avocat, beurre de karit\xE9 et cacao nourrissent la m\xE8che, disciplinent le lock et r\xE9v\xE8lent une brillance profonde \u2014 sans jamais alourdir."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '32px 0'
    }
  }, /*#__PURE__*/React.createElement(Filet, {
    variant: "indigo"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 44,
      color: 'var(--color-indigo)',
      lineHeight: 1
    }
  }, "18 000 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: 'var(--ink-soft)'
    }
  }, "FCFA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(Math.max(1, qty - 1)),
    style: qtyBtn
  }, "\u2013"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      textAlign: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 16
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: () => setQty(qty + 1),
    style: qtyBtn
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    fullWidth: true,
    onClick: () => {
      setAdded(true);
      setTimeout(() => setAdded(false), 1800);
    }
  }, added ? 'Ajouté ✕' : 'Ajouter au rituel'), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "copper"
  }, "Acheter")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 28,
      flexWrap: 'wrap'
    }
  }, ['Huile d’avocat · karité · cacao', 'Sans silicone ni paraben', 'Pressée à froid'].map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--ink-soft)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      background: 'var(--color-copper)',
      transform: 'rotate(45deg)'
    }
  }), " ", f))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid var(--hairline)'
    }
  }, Object.keys(tabs).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: tab === k ? 'var(--color-indigo)' : 'var(--ink-soft)',
      borderBottom: tab === k ? '2px solid var(--color-copper)' : '2px solid transparent',
      marginBottom: -1
    }
  }, tabs[k]))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 300,
      fontSize: 15.5,
      lineHeight: 1.7,
      color: 'var(--ink-soft)',
      marginTop: 22,
      maxWidth: 500
    }
  }, tabContent[tab])))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-sable)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kit-container",
    style: {
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    withRule: true
  }, "Dans le rituel"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40,
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "02",
    label: "Nourrir",
    sub: "L'\xE9tape o\xF9 l'Huile Couronne entre en sc\xE8ne."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3\xD7",
    label: "Par semaine",
    sub: "Le rythme conseill\xE9 pour locks matures."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "50 ml",
    label: "Contenance",
    sub: "Six \xE0 huit semaines de rituel."
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "100%",
    label: "V\xE9g\xE9tale",
    sub: "Avocat, karit\xE9, cacao \u2014 rien d'autre."
  })))), /*#__PURE__*/React.createElement("section", {
    className: "kit-container",
    style: {
      padding: '88px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "kit-display kit-lower",
    style: {
      fontSize: 'clamp(30px, 3.4vw, 46px)',
      color: 'var(--color-indigo)',
      margin: 0
    }
  }, "compl\xE9ter le rituel"), /*#__PURE__*/React.createElement("a", {
    className: "kit-nav-link",
    href: "#",
    style: {
      color: 'var(--color-indigo)'
    }
  }, "Toute la gamme")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, [{
    n: 'Shampoing Naturel',
    t: 'Le geste pur',
    tone: 'obsidian',
    c: '250 ml'
  }, {
    n: 'Beurre Locks',
    t: 'La nourrissante',
    tone: 'sable',
    c: '200 ml'
  }, {
    n: 'Brume Traditionnelle',
    t: "Le rafraîchi",
    tone: 'indigo',
    c: '150 ml'
  }].map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.n,
    padding: 0,
    hover: true,
    hairline: true,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(ProductBottle, {
    tone: p.tone,
    tall: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 10.5,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--accent)'
    }
  }, p.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 400,
      fontSize: 24,
      color: 'var(--color-indigo)',
      marginTop: 6
    }
  }, p.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--ink-soft)',
      marginTop: 8
    }
  }, p.c)))))), /*#__PURE__*/React.createElement(SiteFooter, {
    onBook: () => {
      window.location.hash = '#';
    }
  }));
}
const qtyBtn = {
  width: 40,
  height: 44,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'var(--font-sans)',
  fontSize: 20,
  color: 'var(--color-indigo)',
  lineHeight: 1
};
Object.assign(window, {
  ProductPage,
  ProductBottle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ProductPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/data.js
try { (() => {
/* MND — Données canoniques de la maison (source unique).
   Chargé avant les scripts babel. Expose window.MND.
   Produits naturels réels · services · fondateurs. */
window.MND = function () {
  const FCFA = n => n.toLocaleString('fr-FR') + ' FCFA';

  // ---- La gamme · soins naturels (ingrédients réels) ----
  const products = [{
    id: 'huile-couronne',
    nom: 'Huile Couronne',
    sous: 'le soin racine',
    contenance: '50 ml',
    type: 'Huile scellante',
    tone: 'indigo',
    flacon: 'Verre indigo · capsule cuivre',
    prix: 18000,
    badge: 'Signature',
    actifs: ['Huile d’avocat', 'Beurre de karité', 'Beurre de cacao'],
    desc: 'L’huile qui scelle et nourrit. De la racine à la pointe, elle discipline le lock et révèle une brillance profonde — sans jamais alourdir.'
  }, {
    id: 'shampoing-naturel',
    nom: 'Shampoing Naturel',
    sous: 'le geste pur',
    contenance: '250 ml',
    type: 'Lavant doux',
    tone: 'obsidian',
    flacon: 'Verre obsidienne · monogramme cuivre',
    prix: 14000,
    badge: null,
    actifs: ['Moringa', 'Niaouli', 'Tea tree', 'Cristaux de menthe'],
    desc: 'Lave en douceur et libère le cuir chevelu sans le dessécher. Moringa fortifiant, niaouli & tea tree assainissants, cristaux de menthe pour la fraîcheur.'
  }, {
    id: 'brume-traditionnelle',
    nom: 'Brume Traditionnelle',
    sous: 'le rafraîchi quotidien',
    contenance: '150 ml',
    type: 'Brume hydratante',
    tone: 'indigo',
    flacon: 'Flacon spray indigo · capsule cuivre',
    prix: 12000,
    badge: 'Rituel quotidien',
    actifs: ['Romarin', 'Basilic', 'Bissap', 'Cristaux de menthe', 'Aloe vera'],
    desc: 'Une brume de plantes pour réveiller les locks chaque matin. Romarin stimulant, basilic purifiant, bissap antioxydant, cristaux de menthe rafraîchissants, aloe vera hydratant.'
  }, {
    id: 'serum-racines',
    nom: 'Sérum Racines',
    sous: 'l’essence',
    contenance: '30 ml',
    type: 'Sérum de pousse',
    tone: 'indigo',
    flacon: 'Flacon indigo · capsule cuivre',
    prix: 16000,
    badge: 'Édition prestige',
    actifs: ['Huile de carotte', 'Moringa', 'Niaouli', 'Tea tree'],
    desc: 'Concentré de racines. L’huile de carotte nourrit, le moringa densifie, niaouli & tea tree assainissent le cuir chevelu pour une pousse saine.'
  }, {
    id: 'beurre-locks',
    nom: 'Beurre Locks',
    sous: 'la nourrissante',
    contenance: '200 ml',
    type: 'Beurre coiffant',
    tone: 'sable',
    flacon: 'Pot sable · monogramme indigo',
    prix: 15000,
    badge: null,
    actifs: ['Karité (toute l’Afrique)', 'Beurre de cacao', 'Huile d’avocat'],
    desc: 'Beurre fouetté de karité collecté aux quatre coins de l’Afrique, cacao et avocat. Nourrit, définit et protège chaque lock.'
  }, {
    id: 'pre-pointes',
    nom: 'Pré-pointes Maison',
    sous: 'l’artisanale',
    contenance: 'le sachet',
    type: 'Accessoire création',
    tone: 'obsidian',
    flacon: 'Sachet kraft indigo · sceau cuivre',
    prix: 9000,
    badge: 'Fait maison',
    actifs: ['Fibre naturelle', 'Préparation maison'],
    desc: 'Nos pré-pointes faites main pour démarrer ou allonger les locks. La base d’une création nette, durable, racine après racine.'
  }];

  // ---- Menu de soins · services ----
  const services = [{
    groupe: 'Création de locks',
    note: 'Plus la lock est fine, plus le geste est précieux. Tarif selon densité & longueur.',
    items: [{
      nom: 'Microlocks (très fines)',
      detail: 'La plus exigeante. Densité maximale, finition reine.',
      prix: 'dès 120 000',
      tier: 3
    }, {
      nom: 'Locks fines (sisterlocks)',
      detail: 'Finesse et mouvement. Le grand classique souverain.',
      prix: 'dès 85 000',
      tier: 2
    }, {
      nom: 'Locks moyennes',
      detail: 'Le démarrage équilibré, entretien aisé.',
      prix: 'dès 55 000',
      tier: 1
    }, {
      nom: 'Pré-pointes / allongement',
      detail: 'Allonger ou densifier avec nos pré-pointes maison.',
      prix: 'sur devis',
      tier: 0
    }]
  }, {
    groupe: 'Entretien & soin',
    note: 'Le rituel qui maintient la couronne.',
    items: [{
      nom: 'Resserrage racines',
      detail: 'Reprise des repousses, lock après lock.',
      prix: 'dès 25 000',
      tier: 0
    }, {
      nom: 'Soin profond rituel',
      detail: 'Shampoing + masque plantes + huile scellante.',
      prix: '18 000',
      tier: 0
    }, {
      nom: 'Détox cuir chevelu',
      detail: 'Gommage doux moringa & tea tree.',
      prix: '15 000',
      tier: 0
    }]
  }, {
    groupe: 'Style & conseil',
    note: 'Porter haut, jusque dans le détail.',
    items: [{
      nom: 'Coiffage & mise en forme',
      detail: 'Vrilles, updo, accessoires cuivre.',
      prix: 'dès 12 000',
      tier: 0
    }, {
      nom: 'Consultation premium',
      detail: 'Diagnostic, plan de soin, guide post-soin personnalisé.',
      prix: '10 000',
      tier: 0
    }, {
      nom: 'Coloration végétale',
      detail: 'Henné & plantes, reflets cuivre.',
      prix: 'sur devis',
      tier: 0
    }]
  }];
  const founders = [{
    nom: 'Brice Ahouansou',
    role: 'Co-fondateur · maître locks',
    tels: ['+229 01 96 75 60 62'],
    photo: 'brice-portrait.jpg'
  }, {
    nom: 'Yéman Ahouansou',
    role: 'Co-fondatrice · soin & transmission',
    tels: ['+229 01 62 09 22 22', '+229 01 95 11 66 22'],
    photo: 'yeman-portrait.jpg'
  }];
  const maison = {
    contact: 'contact@mnd.bj',
    insta: '@maison.mnd',
    ville: 'Cotonou · Bénin'
  };
  return {
    FCFA,
    products,
    services,
    founders,
    maison
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Filet = __ds_scope.Filet;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Seal = __ds_scope.Seal;

__ds_ns.Stars = __ds_scope.Stars;

__ds_ns.Stat = __ds_scope.Stat;

})();
