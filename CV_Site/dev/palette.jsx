import React from 'react';
import {Category, Component, Palette, Variant,} from '@react-buddy/ide-toolbox';
import MUIPalette from "@react-buddy/palette-mui";

export const PaletteTree = () => (
    <Palette>
        <Category name="HTML">
            <Component name="Test">
                <Variant requiredParams={['href']}>
                    <a>Link</a>
                </Variant>
            </Component>
        </Category>
        <MUIPalette/>
    </Palette>
);
