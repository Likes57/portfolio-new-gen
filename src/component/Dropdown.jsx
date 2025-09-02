import React, { useState } from 'react';

export default function Dropdown({ label = "Виберіть", options = [] }) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    function toggle() { setOpen(prev => !prev); }
    function choose(opt) {
        setSelected(opt);
        setOpen(false);
    }

    return (
        <div style={{ width: 220, fontFamily: 'sans-serif' }}>
            <label style={{ display: 'block', marginBottom: 6 }}>{label}</label>
            <div style={{
                border: '1px solid #ccc', borderRadius: 6, padding: 10, cursor: 'pointer',
                userSelect: 'none', position: 'relative', background: '#fff'
            }} onClick={toggle}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>{selected ? selected.label : 'Оберіть варіант'}</div>
                    <div style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</div>
                </div>

                {open && (
                    <ul style={{
                        listStyle: 'none', padding: 0, margin: '8px 0 0 0',
                        position: 'absolute', left: 0, right: 0, background: '#fff', border: '1px solid #eee', borderRadius: 6,
                        maxHeight: 200, overflowY: 'auto', zIndex: 1000
                    }}>
                        {options.map(opt => (
                            <li key={opt.value}
                                onClick={(e) => { e.stopPropagation(); choose(opt); }}
                                style={{ padding: '8px 10px', cursor: 'pointer' }}>
                                {opt.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
