import { describe, it, expect } from 'vitest';
import { services, advantages, sectors, team, caseStudies } from '../data';

describe('data module', () => {
  it('services has 6 items with correct structure', () => {
    expect(services).toHaveLength(6);
    services.forEach((s) => {
      expect(s).toHaveProperty('id');
      expect(s).toHaveProperty('title');
      expect(s).toHaveProperty('description');
    });
  });

  it('advantages has 4 items with correct structure', () => {
    expect(advantages).toHaveLength(4);
    advantages.forEach((a) => {
      expect(a).toHaveProperty('id');
      expect(a).toHaveProperty('title');
      expect(a).toHaveProperty('description');
    });
  });

  it('sectors has 10 items', () => {
    expect(sectors).toHaveLength(10);
    sectors.forEach((s) => {
      expect(typeof s).toBe('string');
    });
  });

  it('team has 3 groups with roles', () => {
    expect(team).toHaveLength(3);
    team.forEach((g) => {
      expect(g).toHaveProperty('group');
      expect(g).toHaveProperty('roles');
      expect(Array.isArray(g.roles)).toBe(true);
    });
  });

  it('caseStudies has 3 items with correct structure', () => {
    expect(caseStudies).toHaveLength(3);
    caseStudies.forEach((c) => {
      expect(c).toHaveProperty('id');
      expect(c).toHaveProperty('title');
      expect(c).toHaveProperty('category');
      expect(c).toHaveProperty('image');
      expect(c).toHaveProperty('stats');
    });
  });
});
