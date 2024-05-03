/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
    'use strict'

    const getStoredTheme = () => localStorage.getItem('theme')
    const setStoredTheme = theme => localStorage.setItem('theme', theme)

    const getPreferredTheme = () => {
        const storedTheme = getStoredTheme()
        if (storedTheme) {
            return storedTheme
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = theme => {
        if (theme === 'auto') {
            document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }

    setTheme(getPreferredTheme())
    const returnClassIcosRemove = (activeTheme) => {
        return [
            { theme: 'light', ico: 'bi-sun-fill' },
            { theme: 'dark', ico: 'bi-moon-stars-fill' },
            { theme: 'auto', ico: 'bi-circle-half' }
        ].map((item) => {
            if (item.theme != activeTheme) {
                return item.ico
            }
        }).filter(Boolean);
    }

    const showActiveTheme = (theme, focus = false) => {
        const themeSwitcher = $('#bd-theme')

        if (!themeSwitcher) {
            return
        }

        const themeSwitcherText = $('#bd-theme-text')
        const activeThemeIcon = $('.theme-icon-active').closest('[data-theme-class-ico-name]');
        const btnToActive = $(`[data-bs-theme-value="${theme}"]`)
        const icoClassNameOfActiveBtn = btnToActive.data('theme-class-ico-name')
        document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
            $(element).removeClass('active')
            $(element).attr('aria-pressed', 'false')
        })

        btnToActive.addClass('active')
        btnToActive.attr('aria-pressed', 'true')
        activeThemeIcon.attr('data-theme-class-ico-name', icoClassNameOfActiveBtn)
        activeThemeIcon.addClass(icoClassNameOfActiveBtn)
        const themeSwitcherLabel = `${themeSwitcherText.text()} (${theme})`
        returnClassIcosRemove(theme).map(item => {
            activeThemeIcon.removeClass(item);
        });

        themeSwitcher.attr('aria-label', themeSwitcherLabel)

        if (focus) {
            themeSwitcher.focus()
        }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
        }
    })

    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(getPreferredTheme())

        document.querySelectorAll('[data-bs-theme-value]')
            .forEach(toggle => {
                $(toggle).on('click', () => {
                    const theme = $(toggle).data('bs-theme-value')
                    setStoredTheme(theme)
                    setTheme(theme)
                    showActiveTheme(theme, true)
                })
            })
    })
})()