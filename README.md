# 🚀 Custom UI Kit for React (TailwindCSS)

This is a reusable and scalable UI Kit built with **React** and **TailwindCSS** to maintain design consistency across projects.

## 📌 Features

- 🔄 **Reusable Components** – Write once, use everywhere.

- 🎨 **Customizable Props** – Modify `size`, `variant`, `align`, and `width` easily.

- 📱 **Responsive Design** – Works seamlessly across devices.

- ⚡ **TailwindCSS Powered** – Lightweight and easy to customize.

## 📦 **Installation**

To use this UI Kit in your project, install TailwindCSS if you haven't already:

        npm install tailwindcss

Then, import the components into your project.

## 🚀 Components

    1️⃣ Button Component

    A fully customizable button with variants, sizes, alignment, and width options.

    ✅ Usage

        import { Button } from "@/components/ui/Button";

            <Button variant="primary" size="sm" width="small" align="center">
                Click Me
            </Button>

## 🎨 Props

| Prop      | Type                              | Default     | Description                       |
| --------- | --------------------------------- | ----------- | --------------------------------- |
| `variant` | `"primary"` , `"secondary"`       | `"primary"` | Defines button color scheme       |
| `size`    | `"sm"` , `"md"`                   | `"sm"`      | Defines button size               |
| `align`   | `"left"` , `"center"` , `"right"` | `"center"`  | Sets text alignment inside button |
| `width`   | `"full"` , `"auto"` , `"small"`   | `"auto"`    | Controls button width             |

## 🎨 Customization

You can customize the button styles in Button.tsx:

        const variantClass = {
            primary: "bg-blue-500 text-white",
            secondary: "bg-green-700 text-white",
        };

Simply update the colors, fonts, and effects as per your design system.

## 🛠 Upcoming Components

    After completing the Button, we will develop the following UI components:

## 🎨 Essential Components:

    ✅ Input Field – Customizable text input with validation support.

    ✅ Card – A flexible UI container with header, body, and footer sections.

    ✅ Badge – Small notification tags for statuses (success, warning, error).

    ✅ Modal – Popup component for dialogs and alerts.

    ✅ Alert – Notification messages for user feedback.

    ✅ Toggle / Switch – A styled switch component for settings.

    ✅ Dropdown – Custom dropdown with icons and search functionality.

    ✅ Tooltip – Small popups for additional information.

## 🚀 Advanced Components:

    🔄 Table – Dynamic tables with sorting and filtering.

    📩 Pagination – Navigation for handling long lists.

    📜 Accordion – Expandable panels for FAQs.

    🛒 Stepper – Multi-step UI (e.g., checkout process).

    🔀 Tabs – A component for tabbed navigation.
